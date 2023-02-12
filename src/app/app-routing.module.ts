import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
{
    path: '',
    component : HomeComponent
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   canActivate: [LoginSessionGuard]
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
