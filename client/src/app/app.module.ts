import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PhoneListContainerComponent } from './components/phone-list-container/phone-list-container.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
