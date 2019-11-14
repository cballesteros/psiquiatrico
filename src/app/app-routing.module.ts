import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StroopComponent } from './stroop/stroop.component';
import { KingComponent } from './king/king.component';
import { ZungComponent } from './zung/zung.component';
import { WaisComponent } from './wais/wais.component';
import { WiscComponent } from './wisc/wisc.component';
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



const routes: Routes = [
  {path: 'stroop', component: StroopComponent},
  {path: 'king', component: KingComponent},
  {path: 'zung', component: ZungComponent},
  {path: 'wais', component: WaisComponent},
  {path: 'wisc', component: WiscComponent},
  {path: 'bloques', component: BloquesComponent},
  {path: 'semejanzas', component: SemejanzasComponent},
  {path: 'digitos', component: DigitosComponent},
  {path: 'matrices', component: MatricesComponent},
  {path: 'vocabulario', component: VocabularioComponent},
  {path: 'aritmetica', component: AritmeticaComponent},
  {path: 'busquedaSimbolos', component: BusquedaSimbolosComponent},
  {path: 'puzlesVisuales', component: PuzlesVisualesComponent},
  {path: 'informacion', component: InformacionComponent},
  {path: 'claveNumeros', component: ClaveNumerosComponent},
  {path: 'letrasNumeros', component: LetrasNumerosComponent},
  {path: 'balanzas', component: BalanzasComponent},
  {path: 'comprension', component: ComprensionComponent},
  {path: 'cancelacion', component: CancelacionComponent},
  {path: 'figurasIncompletas', component: FigurasIncompletasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
