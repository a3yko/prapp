import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPrPage } from './edit-pr.page';

const routes: Routes = [
  {
    path: '',
    component: EditPrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPrPageRoutingModule {}
