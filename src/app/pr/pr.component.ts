import { Component, OnInit, Input } from '@angular/core';
import { PR } from '../types/pr';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pr',
  templateUrl: './pr.component.html',
  styleUrls: ['./pr.component.scss'],
})
export class PrComponent implements OnInit {
  @Input() pr: PR;
  private user;
  id: string;
  constructor(private router: Router,
    private data: DataService,
    private auth: AuthService,
    public alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    ) { }

  async ngOnInit(){
    this.user = await this.auth.getCurrentUser();
    this.id = this.pr.id;
  }

  edit(){
    this.router.navigate(['pr/'+this.id+'/edit']);
  }

  async delete(){
    this.presentAlertConfirm();
    
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
          },
        },
        {
          text: 'Cancel',
          handler: () => {
          }
        },
      ]
    });

    await alert.present();
    
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }


}
