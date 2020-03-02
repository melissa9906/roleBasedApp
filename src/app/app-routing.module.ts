import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { GuestModule } from './guest/guest.module';


const routes: Routes = [
  {
    path: 'user',
    component: UserModule
  },
  {
    path: 'admin',
    component: AdminModule
  },
  {
    path: 'guest',
    component: GuestModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
