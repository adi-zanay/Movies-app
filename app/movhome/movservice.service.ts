import { Injectable } from '@angular/core';
import { Mov } from './mov.detail';

@Injectable({
  providedIn: 'root'
})
export class MovserviceService {

  private mo: Mov[]=[
    {
      mid: 'm1',
      mname: 'Stuber (2019)',
      director: 'Michael Dowse',
      posterimage: 'https://th.bing.com/th/id/OIP.kuHCyuAcgLwpwncH82ft6wHaK5?pid=ImgDet&rs=1',
      actors: ['Dave Bautista', 'Kumail Nanjiani', 'Mira Sorvino', 'Natalie Morales'],
      img1: [
        'https://highdefdiscnews.com/wp-content/uploads/2019/10/stuber_4k_32-1024x576.png',
        'https://poral.eu/screen/blu-ray_1080/s/stuber_2019/stuber_2019_01.jpg',
        'https://images2.imgbox.com/e4/39/lFcp1rvC_o.png',
        'https://highdefdiscnews.com/wp-content/uploads/2019/10/stuber_4k_46-1024x576.png',
        'https://highdefdiscnews.com/wp-content/uploads/2019/10/stuber_4k_42-1024x576.png'
      ]
    },
    {
      mid: 'm2',
      mname: 'When We First Met (2018)',
      director: 'Ari Sandel',
      posterimage: 'https://th.bing.com/th/id/OIP.pCgJKM503OkSpZgRCW3bqAHaK_?pid=ImgDet&rs=1',
      actors: ['Adam Devine', 'Alexandra Daddario', 'Shelley Hennig', 'Andrew Bachelor'],
      img1: [
        'https://th.bing.com/th/id/OIP.fUN84hL6P2-52bIpa5GXHQHaEK?pid=ImgDet&rs=1',
        'https://www.filmous.com/static/photos/217722/56_midi.jpg',
        'https://i.pinimg.com/736x/d2/f2/01/d2f201acf88c9f560981924209115c81.jpg',
        'https://i.ytimg.com/vi/y_3Vc9QqE-A/maxresdefault.jpg',
        'https://th.bing.com/th/id/OIP.XEatQLVfSC3IZtZdgGv_xAHaEK?pid=ImgDet&rs=1'
      ]
    },
    {
      mid: 'm3',
      mname: 'Game Night (I) (2018)',
      director: 'Jonathan Goldstein',
      posterimage: 'https://www.hdclub.ua/files/film/big/bigi5afca4a494dc6.jpg',
      actors: ['Jason Bateman', 'Rachel McAdams', 'Kyle Chandler', 'Sharon Horgan'],
      img1: [
        'https://th.bing.com/th/id/OIP.4ges8VHzHstApbiYsoHzdwHaDF?pid=ImgDet&rs=1',
        'https://th.bing.com/th/id/OIP.KEE9KDtAPWcVyEy6ry9RzwHaDF?pid=ImgDet&w=1280&h=534&rs=1',
        'https://th.bing.com/th/id/OIP.eLEWMa7shoEwdjkMEkYEsQHaDF?pid=ImgDet&w=1280&h=534&rs=1',
        'https://th.bing.com/th/id/OIP.sB3i5u7WxZuDgu0aSXmXewHaEo?pid=ImgDet&w=2560&h=1600&rs=1',
        'https://th.bing.com/th/id/OIP.6Knre3FU1F0SEXJ3PQ_u7QHaEK?pid=ImgDet&rs=1'
      ]
    },
    {
      mid: 'm4',
      mname: 'Jumanji: Welcome to the Jungle (2017)',
      director: 'Jake Kasdan',
      posterimage: 'https://th.bing.com/th/id/OIP.U6aeFxpSsdmw8onKKBsGXAHaLH?pid=ImgDet&rs=1',
      actors: ['Dwayne Johnson', 'Karen Gillan', 'Kevin Hart', 'Jack Black'],
      img1: [
        'https://th.bing.com/th/id/OIP.dlaiyuPLje4wkkhcZFfbIgHaEK?pid=ImgDet&rs=1',
        'https://th.bing.com/th/id/OIP.ZpTZQ_HqPInluQVyh0l31AHaEK?pid=ImgDet&rs=1',
        'https://th.bing.com/th/id/OIP.YGVTKa5clN1Wk4Nqp9tn6QHaEK?pid=ImgDet&rs=1',
        'https://th.bing.com/th/id/OIP.RJevhykyJ533QfGtqaXjkwHaEK?pid=ImgDet&rs=1',
        'https://th.bing.com/th/id/OIP.OPUVMNkFImYipf8Z5-9WugHaEK?pid=ImgDet&rs=1'
      ]
    },
    {
      mid: 'm5',
      mname: 'Going in Style (2017)',
      director: 'Zach Braff',
      posterimage: 'https://th.bing.com/th/id/OIP.gnIdB4tE4iuhqF6pvVYLvAAAAA?pid=ImgDet&rs=1',
      actors: ['Michael Caine', 'Alan Arkin', 'Ann-Margret', 'Matt Dillon'],
      img1: [
        'https://th.bing.com/th/id/OIP.pHT5nRgsGoWo1n6-8bCitwHaEK?pid=ImgDet&rs=1',
        'https://th.bing.com/th/id/OIP.4cIYUDDciEQ5CYjGV9NAUQHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        'https://th.bing.com/th/id/OIP.TsNA4nbY1TOIMFeSgFop7QHaE8?w=240&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        'https://th.bing.com/th/id/OIP.NrGNRGI1XjN22X0dddMU2gHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        'https://th.bing.com/th/id/OIP.YIi_lXwm-gO30J3CLoEAPgHaEK?w=261&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
      ]
    }
  ];
  constructor() { }

  getAllMov()
  {
    return[...this.mo];
  }
  getMov(moviid: string)
  {
    return{...this.mo.find(move => move.mid === moviid)};
  }

  deleteMovie(moviid: string)
  {
    this.mo = this.mo.filter(move =>
      move.mid !== moviid);
  }
}
