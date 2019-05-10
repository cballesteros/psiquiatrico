import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StroopComponent } from './stroop/stroop.component';
import { KingComponent } from './king/king.component';
import { ZungComponent } from './zung/zung.component';
import { PalabrasComponent} from './stroop/palabras/palabras.component';
import { ColoresComponent } from './stroop/colores/colores.component';
import { MixtoComponent } from './stroop/mixto/mixto.component';

const routes: Routes = [
  {path: 'stroop', component: StroopComponent},
  {path: 'king', component: KingComponent},
  {path: 'zung', component: ZungComponent},
  {path: 'palabras', component: PalabrasComponent},
  {path: 'colores', component: ColoresComponent},
  {path: 'mixto', component: MixtoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
