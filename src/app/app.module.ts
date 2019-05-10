import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StroopComponent } from './stroop/stroop.component';
import { KingComponent } from './king/king.component';
import { ZungComponent } from './zung/zung.component';
import { PalabrasComponent } from './stroop/palabras/palabras.component';
import { ColoresComponent } from './stroop/colores/colores.component';
import { MixtoComponent } from './stroop/mixto/mixto.component';

@NgModule({
  declarations: [
    AppComponent,
    StroopComponent,
    KingComponent,
    ZungComponent,
    PalabrasComponent,
    ColoresComponent,
    MixtoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
