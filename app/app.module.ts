import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent }   from './app.component';
import {EwalletMaterialModule}  from './ewallet.material.module';

import 'hammerjs/hammer';

@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule,ReactiveFormsModule,
                  EwalletMaterialModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

