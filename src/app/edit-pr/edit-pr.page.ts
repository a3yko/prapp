import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { PR } from '../types/pr';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-pr',
  templateUrl: './edit-pr.page.html',
  styleUrls: ['./edit-pr.page.scss'],
})
export class EditPrPage implements OnInit {
  id: string;
  private user;
  public old_pr: Observable<PR>
  prform: FormGroup;

  constructor(private form: FormBuilder,
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.prform = this.form.group({
      name: new FormControl("", Validators.required),
      reps : new FormControl("", Validators.required),
      weight : new FormControl("", Validators.required)
    });

    this.user = await this.auth.getCurrentUser();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.old_pr = this.data.getPr(this.user.uid, this.id);
    }

    editPR(){
      this.data.editPr(this.user.uid, this.id,
         this.prform.controls.name.value,
          this.prform.controls.reps.value,
           this.prform.controls.weight.value)
           
      this.router.navigateByUrl("pr/"+this.id)
    }

    cancel(){
      this.router.navigateByUrl("pr/"+this.id);
    }

    getBackButtonText() {
      const win = window as any;
      const mode = win && win.Ionic && win.Ionic.mode;
      return mode === 'ios' ? 'Prs' : '';
    }

}

