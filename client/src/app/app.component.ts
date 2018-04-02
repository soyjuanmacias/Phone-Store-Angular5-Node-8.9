import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getPhones } from './shared/store/phone.reducer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  phoneState: Object = {};

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(getPhones());
    this.store.select('phones').subscribe(data => {
      this.phoneState = data;
    });
  }
}
