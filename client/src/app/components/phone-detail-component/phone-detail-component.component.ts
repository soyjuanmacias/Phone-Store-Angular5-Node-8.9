import { Component, OnInit, Input } from '@angular/core';
import { Phone } from '../../shared/model/phone.model';

@Component({
  selector: 'app-phone-detail-component',
  templateUrl: './phone-detail-component.component.html',
  styleUrls: ['./phone-detail-component.component.scss']
})
export class PhoneDetailComponentComponent implements OnInit {
  @Input() phone: Phone = this.phone;
  constructor() { }

  ngOnInit() {
  }

}
