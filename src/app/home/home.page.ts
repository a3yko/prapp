import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { PR } from '../types/pr';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  prs: Observable<PR[]>;
  constructor(private data: DataService, private auth: AuthService, private router: Router ) {
  }

  async ngOnInit(){
  const user = await this.auth.getCurrentUser();
    this.prs = this.data.getPrs(user.uid);
  }




  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  async logout(){

    this.auth.logout();
    location.reload()
  }
}
