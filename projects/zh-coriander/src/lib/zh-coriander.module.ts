import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ZhAlertComponent } from './alert/alert.component';
import { ZhCheckboxComponent } from './checkbox/checkbox.component';
import { ZhRadioComponent } from './radio/radio.component';
import { ZhCorianderComponent } from './zh-coriander.component';



@NgModule({
  declarations: [
    ZhCorianderComponent,
    ZhAlertComponent,
    ZhCheckboxComponent,
    ZhRadioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    ZhCorianderComponent,
    ZhAlertComponent,
    ZhCheckboxComponent,
    ZhRadioComponent
  ]
})
export class ZhCorianderModule { }
