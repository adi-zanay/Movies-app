import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movhome',
    pathMatch: 'full'
  },
  {
    path: 'movhome',
    children: [
      {
        path: '',
        loadChildren: () => import ('./movhome/movhome.module').then(m => m.MovhomePageModule)
      },
      {
        path: ':moviid',
        loadChildren: () => import('./movhome/movdetail/movdetail.module').then(m => m.MovdetailPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
