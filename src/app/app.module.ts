import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppCalculator } from './app.component';

@NgModule({
  declarations: [
    AppCalculator
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppCalculator]
})
export class AppModule { }
