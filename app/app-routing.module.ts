import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValitudComponent } from './valitud/valitud.component';
import { UusInimeneComponent } from './uus-inimene/uus-inimene.component';
import { InimesedComponent } from './inimesed/inimesed.component';
import { MuudaComponent } from './muuda/muuda.component';
import { N2itaComponent } from './n2ita/n2ita.component';
const routes: Routes = [
  { path: "valitud", component: ValitudComponent },
  { path: "uus-inimene", component: UusInimeneComponent },
  { path: "inimesed", component: InimesedComponent},
  { path: "muuda/:personName", component: MuudaComponent },
  { path: "n2ita", component: N2itaComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
