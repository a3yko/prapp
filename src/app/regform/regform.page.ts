import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-regform',
  templateUrl: './regform.page.html',
  styleUrls: ['./regform.page.scss'],
})
export class RegformPage implements OnInit {
  registerFormGroup: FormGroup;

  constructor(private authService: AuthService,private router: Router, public alertController: AlertController) {
    this.registerFormGroup = new FormGroup(
      {
        name: new FormControl(""),
        email: new FormControl("", Validators.email),
        password: new FormControl("", Validators.minLength(8))
      },
      Validators.required
    );
  }

  
  ngOnInit() {}

  //Checks if the password entered is more than 8 characters
  checkLength(){
    if(this.registerFormGroup.value.password != ""){
      if(this.registerFormGroup.value.password.length < 8){
        return true;
      }else{
        return false;
      }
    }
  }

  async register() {
    if (this.registerFormGroup.valid) {
      this.authService.signUp(
        this.registerFormGroup.get("email").value,
        this.registerFormGroup.get("password").value,
        this.registerFormGroup.get("name").value
      ).then(result => {
        this.presentAlertSuccess();
        this.router.navigate(["loginform"]);
      }).catch(err => {
        this.presentAlertError();
      }); 
    }
  }

  async presentAlertSuccess() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      subHeader: 'Registration Complete',
      message: 'You may now login to use the app.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertError() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'Registration Failed',
      message: 'Failed To Register. Please try again',
      buttons: ['OK']
    });

    await alert.present();
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Prs' : '';
  }

}
