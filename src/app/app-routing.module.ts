import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { FinishBuyComponent } from './component/finish-buy/finish-buy.component';
import { BuysComponent } from './component/buys/buys.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'finish', component: FinishBuyComponent },
  { path: 'buys', component: BuysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
