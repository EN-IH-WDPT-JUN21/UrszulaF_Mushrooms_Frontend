import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MushroomListComponent } from './mushroom-list/mushroom-list.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthGuard } from './services/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [  {
  path: '',
  component: HomeComponent
},
{
  path: 'login',
  component: LoginFormComponent
},
{
  path: 'register',
  component: RegisterFormComponent
},
{
  path: 'profile',
  component: UserProfileComponent,
  canActivate: [AuthGuard]
},
{
  path: 'mushroomlist',
  component: MushroomListComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
