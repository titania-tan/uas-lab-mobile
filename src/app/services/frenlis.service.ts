import { Injectable } from '@angular/core';
import {Fren} from './frenlist.modal';

@Injectable({
  providedIn: 'root'
})
export class FrenlisService {
  private frens: Fren[] = [
    {
      id: 'f1',
      name: 'dindun',
      imageURL: 'https://pbs.twimg.com/profile_images/1200672650739081218/jByt16JE.jpg'
    },
    {
      id: 'f2',
      name: 'funny',
      imageURL: 'https://zapzee.net/wp-content/uploads/2020/09/Screen-Shot-2020-09-29-at-1.24.03-AM-1024x990.png'
    },
    {
      id: 'f3',
      name: 'zura',
      imageURL: 'https://i.pinimg.com/originals/5d/33/bb/5d33bb56bb2e9b81f79f54b1f5be4668.jpg'
    },
    {
      id: 'f4',
      name: 'sum',
      imageURL: 'https://www.hellokpop.com/wp-content/uploads/2020/09/MAMAMOO-3-400x242.jpg'
    },
    {
      id: 'f5',
      name: 'whee',
      imageURL: 'https://data.whicdn.com/images/324863663/original.gif'
    },
    {
      id: 'f6',
      name: 'hye',
      imageURL: 'https://cdns.klimg.com/kapanlagi.com/p/headline/476x238/sebelum-terkenal-hwasa-mamamoo-diminta--6fb22d.jpg'
    },
    {
      id: 'f7',
      name: 'yong',
      imageURL: 'https://www.generasia.com/w/images/thumb/9/9e/Solar_-_TRAVEL_promo.jpg/550px-Solar_-_TRAVEL_promo.jpg'
    },
    {
      id: 'f8',
      name: 'byul',
      imageURL: 'https://image.kpopmap.com/2020/10/mamamoo-travel-member-profile-MoonByul.jpg'
    }
  ];
  constructor() { }

  getFren(){
    return [...this.frens];
  }
}
