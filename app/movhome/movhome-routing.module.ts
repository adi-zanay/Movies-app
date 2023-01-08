import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovhomePage } from './movhome.page';

const routes: Routes = [
  {
    path: '',
    component: MovhomePage
  },
  {
    path: 'movdetail',
    loadChildren: () => import('./movdetail/movdetail.module').then( m => m.MovdetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovhomePageRoutingModule {}
