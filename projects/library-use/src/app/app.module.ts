import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZhCorianderModule } from 'dist/zh-coriander';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZhCorianderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
