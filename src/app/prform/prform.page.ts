import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-prform',
  templateUrl: './prform.page.html',
  styleUrls: ['./prform.page.scss'],
})
export class PrformPage implements OnInit {
  prform: FormGroup;
  constructor(private form: FormBuilder, private http: HttpClient, private router: Router, private newpr : DataService, public alertController: AlertController) {
   }

  ngOnInit() {
    this.prform = this.form.group({
      name : new FormControl("", Validators.required),
      reps : new FormControl("", Validators.required),
      weight : new FormControl("", Validators.required)
    });
  }


  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Prs' : '';
  }

  async createPR(){
    let pr = {
      date: new Date(),
      name: this.prform.controls.name.value,
      reps: this.prform.controls.reps.value,
      weight: this.prform.controls.weight.value,
    }
    this.newpr.create(pr);
    this.presentAlertSuccess();
    this.router.navigate(['home']);
  }

  async presentAlertSuccess() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      message: 'PR was successfully added.',
      buttons: ['OK']
    });
    await alert.present();
    
  }

  cancel(){
    this.router.navigateByUrl("home");
  }
  
}
