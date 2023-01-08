import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovdetailPageRoutingModule } from './movdetail-routing.module';

import { MovdetailPage } from './movdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovdetailPageRoutingModule
  ],
  declarations: [MovdetailPage]
})
export class MovdetailPageModule {}
