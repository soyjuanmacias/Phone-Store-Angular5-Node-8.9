import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Phone } from '../../shared/model/phone.model';

@Component({
  selector: 'app-phone-detail-component',
  templateUrl: './phone-detail-component.component.html',
  styleUrls: ['./phone-detail-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneDetailComponentComponent {
  @Input() phone: Phone = this.phone;
}
