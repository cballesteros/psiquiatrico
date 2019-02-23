import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StroopComponent } from './stroop/stroop.component';
import { KingComponent } from './king/king.component';
import { ZungComponent } from './zung/zung.component';



@NgModule({
  declarations: [
    AppComponent,
    StroopComponent,
    KingComponent,
    ZungComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
