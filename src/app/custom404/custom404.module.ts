import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Custom404PageRoutingModule } from './custom404-routing.module';

import { Custom404Page } from './custom404.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Custom404PageRoutingModule
  ],
  declarations: [Custom404Page]
})
export class Custom404PageModule {}
