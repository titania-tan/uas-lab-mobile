import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMainPage } from './tab-main.page';

const routes: Routes = [
  {
    path: '',
    component: TabMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMainPageRoutingModule {}
