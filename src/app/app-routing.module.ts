import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StroopComponent } from './stroop/stroop.component';
import { KingComponent } from './king/king.component';
import { ZungComponent } from './zung/zung.component';
import { WaisComponent } from './wais/wais.component';


const routes: Routes = [
  {path: 'stroop', component: StroopComponent},
  {path: 'king', component: KingComponent},
  {path: 'zung', component: ZungComponent},
  {path: 'wais', component: WaisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
