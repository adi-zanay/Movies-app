import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Mov } from '../mov.detail';
import { MovserviceService } from '../movservice.service';

@Component({
  selector: 'app-movdetail',
  templateUrl: './movdetail.page.html',
  styleUrls: ['./movdetail.page.scss'],
})
export class MovdetailPage implements OnInit {

  lomov: Mov;
  constructor(
    private activateroute: ActivatedRoute,
    private alertCtrl: AlertController,
    private moviservice: MovserviceService,
    private route: Router
  ) { }

  ngOnInit() {
    this.activateroute.paramMap.subscribe(paramMap =>
      {
        if(!paramMap.has('moviid')){return;}
        const moviid = paramMap.get('moviid');
        this.lomov = this.moviservice.getMov(moviid);
      });
  }

  onDeleteBook()
  {
    this.alertCtrl.create({
      header: 'Are you sure',
      message: 'Do you want to delete this Movie details',
      buttons: [
        {
          text:'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler:()=>{
            this.moviservice.deleteMovie(this.lomov.mid);
            this.route.navigate(['/movhome']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
