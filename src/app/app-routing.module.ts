import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFormComponent } from './event-form/event-form.component';
import { EventItemComponent } from './event-item/event-item.component';
import { EventListComponent } from './event-list/event-list.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MushroomItemComponent } from './mushroom-item/mushroom-item.component';
import { MushroomListComponent } from './mushroom-list/mushroom-list.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthGuard } from './services/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserUpdateComponent } from './user-update/user-update.component';

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
  path: 'user-update',
  component: UserUpdateComponent,
  canActivate: [AuthGuard]
},
{
  path: 'mushroom-list',
  component: MushroomListComponent
},
{
  path: 'mushroom-details/:mushroomName',
  component: MushroomItemComponent
},
{
  path: 'event-list',
  component: EventListComponent
},
{
  path: 'event-details/:eventName',
  component: EventItemComponent
}
,
{
  path: 'event-form',
  component: EventFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
