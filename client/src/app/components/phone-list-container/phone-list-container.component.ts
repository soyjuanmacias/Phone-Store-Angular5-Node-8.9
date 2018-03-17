import {Phone} from '../../shared/model/phone.model';
import { PhoneDetailComponentComponent } from './../phone-detail-component/phone-detail-component.component';
import { Component, OnInit } from '@angular/core';

const phones: Array<Phone> = [
  {
    id: 1,
    brand: 'Apple',
    model: 'iPhone X',
    description: '¿Need to be more hipster? Common, buy an iPhone X',
    image: 'https://www.pcdeluxe.es/112126-home_default/apple-iphone-x-64gb-plata-libre.jpg',
    color: 'Black',
    price: '1.600 €',
    battery: '2800mah',
    screen: '5,7 inches'
  },
  {
    id: 2,
    brand: 'Samsung',
    model: 'Galaxy S9',
    description: 'The last of the last of all the latest technologies bro',
    image: 'https://www.yaphone.net/1347/samsung-galaxy-s9-g960f-64gb-dual-sim-purpura.jpg',
    color: 'Black',
    price: '1.350 €',
    battery: '3100mah',
    screen: '4,9 inches'
  },
  {
    id: 3,
    brand: 'Xiaomi',
    model: 'Redmi Note 4',
    description: 'Awesome and big mobile phone for Javascript ninjas',
    image: 'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/09/22/goods-img/1506272883370131307.jpg',
    color: 'Gold',
    price: '458 €',
    battery: '2800mah',
    screen: '5,7 inches'
  },
  {
    id: 4,
    brand: 'Nokia',
    model: '3210',
    description: '¿Do you like snakes? Haha, you will hate them with this smartrock',
    image: 'https://www.vintagemobile.fr/380-large_default/nokia-3210.jpg',
    color: 'Blue',
    price: '16 €',
    battery: '400mah',
    screen: '1,3 inches'
  },
  {
    id: 5,
    brand: 'Meizu',
    model: 'Wikomi',
    description: 'A Chinese cell phone that neither his father knows him',
    image: 'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/09/21/goods-img/1505937990674985292.jpg',
    color: 'Pink-Violet',
    price: '186 €',
    battery: '1240mah',
    screen: '4,5 inches'
  },
  {
    id: 6,
    brand: 'Huawei',
    model: 'NiIdea 7',
    description: `¿Do you want to build a house? That's nice, buy a lot of Huawei and use them like bricks`,
    image: 'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/10/20/goods-img/1508464622706355845.jpg',
    color: 'Black',
    price: '210 €',
    battery: '2800mah',
    screen: '2,9 inches'
  },
];

@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.css']
})
export class PhoneListContainerComponent implements OnInit {
  phones: Object[];

  ngOnInit() {
    this.phones = phones;
  }

}
