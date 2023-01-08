import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovhomePageRoutingModule } from './movhome-routing.module';

import { MovhomePage } from './movhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovhomePageRoutingModule
  ],
  declarations: [MovhomePage]
})
export class MovhomePageModule {}
