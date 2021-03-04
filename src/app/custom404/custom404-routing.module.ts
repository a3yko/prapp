import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Custom404Page } from './custom404.page';

const routes: Routes = [
  {
    path: '',
    component: Custom404Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Custom404PageRoutingModule {}
