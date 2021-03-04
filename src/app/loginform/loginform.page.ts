import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.page.html',
  styleUrls: ['./loginform.page.scss'],
})
export class LoginformPage implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private authService: AuthService,
    private router: Router, 
    public alertController: AlertController) 
  {
    this.loginFormGroup = new FormGroup(
      {
        email: new FormControl("", [Validators.email, Validators.required]),
        password: new FormControl("", Validators.required)
      },
      Validators.required
    );
  }

  ngOnInit() {}


  login() {
    if (this.loginFormGroup.valid) {
      this.authService.login(
        this.loginFormGroup.get("email").value,
        this.loginFormGroup.get("password").value
      ).then(result => {
        if (result) {
          this.router.navigate(["home"]);
        }
        else {
          this.presentAlertFailure();
        }
      }).catch(err => {
        this.presentAlertFailure();
      });
    }
  }
  async presentAlertFailure() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Login Failed',
      message: 'Incorrect username or password. Please try again.',
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
