import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { PR } from '../types/pr';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-view-pr',
  templateUrl: './view-pr.page.html',
  styleUrls: ['./view-pr.page.scss'],
})
export class ViewPrPage implements OnInit {
  public pr: Observable<PR>;
  private user;
  id: string;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private router: Router,
    public alertController: AlertController,
  ) { }

 async ngOnInit() {
    this.user = await this.auth.getCurrentUser();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pr = this.data.getPr(this.user.uid, this.id);
    
    const test = await this.data.checkExistance(this.user.uid, this.id);
    if(!test){
      this.router.navigate(['**']);
    }
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Prs' : '';
  }

  async delete(){
    
    this.presentAlertConfirm();
    
  }
  async presentAlertSuccess() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      message: 'PR was successfully deleted.',
      buttons: ['OK']
    });
    await alert.present();
    
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete',
      message: 'Are you sure you want to delete this PR?',
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            this.data.deletePr(this.user.uid, this.id);
            this.router.navigate(['home']);
          },
        },
        {
          text: 'Cancel',
          handler: () => {
            this.router.navigate(['home']);
          }
        },
      ]
    });

    await alert.present();
    
  }


  edit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.router.navigate(['pr/'+id+'/edit']);
  }
}
