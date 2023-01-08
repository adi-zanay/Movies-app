import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovdetailPage } from './movdetail.page';

const routes: Routes = [
  {
    path: '',
    component: MovdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovdetailPageRoutingModule {}
