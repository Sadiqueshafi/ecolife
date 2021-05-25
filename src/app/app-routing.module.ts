import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountComponent } from './my-account/my-account.component';
import { MenuSectionComponent } from './homepagemanagement/menu-section/menu-section.component';
import { HomepageComponent } from './homepagemanagement/homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { AuthenticationGuard } from './shared/authentication.guard';
const routes: Routes = [
  {
    path: 'Account',
    component: MyAccountComponent,
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
    {path: 'forgetPassword', component: ForgetPasswordComponent},
  // { path: 'Account' , component: MyAccountComponent , canActivate: [AuthenticationGuard], children: [
  // ]},
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  // MyAccountComponent
}
