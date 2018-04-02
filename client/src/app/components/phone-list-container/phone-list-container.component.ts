import { phones } from './../../shared/store/phone.reducer';
import { Phone } from '../../shared/model/phone.model';
import { PhoneState } from '../../shared/model/phonestate.model';
import { PhoneDetailComponentComponent } from './../phone-detail-component/phone-detail-component.component';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneListContainerComponent {
  @Input() phoneState: PhoneState;

  get phones() {
    return this.phoneState.phones;
  }

  get pending() {
    return this.phoneState.pending;
  }

  get error() {
    return this.phoneState.error;
  }

  checkStatus() {
    return (this.error || this.checkPending());
  }

  checkPending() {
    return (!this.error && this.pending && this.phones && this.phones.length === 0);
  }
}
