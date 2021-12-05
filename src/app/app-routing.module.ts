import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemAppComponent } from './pages/item-app/item-app.component';
import { LoginComponent } from './cmps/login/login.component';
import { UserSettingComponent } from './cmps/user-setting/user-setting.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'item', component: ItemAppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-setting', component: UserSettingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

