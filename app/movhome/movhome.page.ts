import { Component, OnInit } from '@angular/core';
import { Mov } from './mov.detail';
import { MovserviceService } from './movservice.service';

@Component({
  selector: 'app-movhome',
  templateUrl: './movhome.page.html',
  styleUrls: ['./movhome.page.scss'],
})
export class MovhomePage implements OnInit {

  mov: Mov[]=[];
  constructor(private moveservice: MovserviceService) { }

  ngOnInit() {
    this.mov = this.moveservice.getAllMov();
  }

}
