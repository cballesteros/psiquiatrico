import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StroopComponent } from './stroop/stroop.component';
import { KingComponent } from './king/king.component';
import { ZungComponent } from './zung/zung.component';
import { WaisComponent } from './wais/wais.component';
import { BloquesComponent } from './wais/bloques/bloques.component';
import { SemejanzasComponent } from './wais/semejanzas/semejanzas.component';
import { DigitosComponent } from './wais/digitos/digitos.component';
import { MatricesComponent } from './wais/matrices/matrices.component';
import { VocabularioComponent } from './wais/vocabulario/vocabulario.component';
import { AritmeticaComponent } from './wais/aritmetica/aritmetica.component';
import { BusquedaSimbolosComponent } from './wais/busqueda-simbolos/busqueda-simbolos.component';
import { PuzlesVisualesComponent } from './wais/puzles-visuales/puzles-visuales.component';
import { InformacionComponent } from './wais/informacion/informacion.component';
import { ClaveNumerosComponent } from './wais/clave-numeros/clave-numeros.component';
import { LetrasNumerosComponent } from './wais/letras-numeros/letras-numeros.component';
import { BalanzasComponent } from './wais/balanzas/balanzas.component';
import { ComprensionComponent } from './wais/comprension/comprension.component';
import { CancelacionComponent } from './wais/cancelacion/cancelacion.component';
import { FigurasIncompletasComponent } from './wais/figuras-incompletas/figuras-incompletas.component';
import { WiscComponent } from './wisc/wisc.component';

@NgModule({
  declarations: [
    AppComponent,
    StroopComponent,
    KingComponent,
    ZungComponent,
    WaisComponent,
    BloquesComponent,
    SemejanzasComponent,
    DigitosComponent,
    MatricesComponent,
    VocabularioComponent,
    AritmeticaComponent,
    BusquedaSimbolosComponent,
    PuzlesVisualesComponent,
    InformacionComponent,
    ClaveNumerosComponent,
    LetrasNumerosComponent,
    BalanzasComponent,
    ComprensionComponent,
    CancelacionComponent,
    FigurasIncompletasComponent,
    WiscComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
