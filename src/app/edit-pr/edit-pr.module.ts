import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPrPageRoutingModule } from './edit-pr-routing.module';

import { EditPrPage } from './edit-pr.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EditPrPageRoutingModule
  ],
  declarations: [EditPrPage]
})
export class EditPrPageModule {}
