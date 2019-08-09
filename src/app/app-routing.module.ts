import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { FinishComponent } from './finish/finish.component';
import { TrolleyComponent } from './trolley/trolley.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommodityComponent } from './commodity/commodity.component';


const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    data: { title: 'Heroes List' }
  },
  { path: 'commodity/:id',      component: CommodityComponent },
  { path: 'trolley', component: TrolleyComponent },
  { path: 'finish', component: FinishComponent },
  { path: '',
    redirectTo: '/trolley',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
