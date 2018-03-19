import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { GET_PHONES, GET_PHONES_SUCCESS, GET_PHONES_ERROR } from '../shared/store/phone.reducer';
import { PhoneService } from './phone.service';

@Injectable()
export class PhonesEffects {
  constructor(
    private actions$: Actions,
    private phoneService: PhoneService
  ) {}

  @Effect() getPhones$ = this.actions$
    .ofType(GET_PHONES)
    .switchMap(action => {
      return this.phoneService.getPhones()
        .map(phones => ({ type: GET_PHONES_SUCCESS, payload: phones }))
        .catch((): any => Observable.of({ type: GET_PHONES_ERROR }));
    });
}
