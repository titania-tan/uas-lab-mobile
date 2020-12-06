import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'tab-friends',
        loadChildren: () => import('../tab-friends/tab-friends.module').then(m => m.TabFriendsPageModule)
      },
      {
        path: 'tab-main',
        loadChildren: () => import('../tab-main/tab-main.module').then(m => m.TabMainPageModule)
      },
      {
        path: 'tab-profile',
        loadChildren: () => import('../tab-profile/tab-profile.module').then(m => m.TabProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tab-main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path : '',
    redirectTo: 'home/tab-main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
