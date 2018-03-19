import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { PhonesEffects } from './services/phone.effects';
import { PhoneService } from './services/phone.service';
import { phones, GET_PHONES, GET_PHONES_ERROR, GET_PHONES_SUCCESS } from './shared/store/phone.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { PhoneListContainerComponent } from './components/phone-list-container/phone-list-container.component';
import { PhoneDetailComponentComponent } from './components/phone-detail-component/phone-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListContainerComponent,
    PhoneDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({phones}),
    EffectsModule.forRoot([PhonesEffects]),
  ],
  providers: [
    PhoneService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
