import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { ContactComponent } from './contact/contact.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventItemComponent } from './event-item/event-item.component';
import { EventListComponent } from './event-list/event-list.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MushroomItemComponent } from './mushroom-item/mushroom-item.component';
import { MushroomListComponent } from './mushroom-list/mushroom-list.component';
import { QuizzAnswerComponent } from './quizz-answer/quizz-answer.component';
import { QuizzCheckComponent } from './quizz-check/quizz-check.component';
import { QuizzFormComponent } from './quizz-form/quizz-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthGuard } from './services/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserUpdateBioComponent } from './user-update-bio/user-update-bio.component';
import { UserUpdateEmailComponent } from './user-update-email/user-update-email.component';
import { UserUpdatePasswordComponent } from './user-update-password/user-update-password.component';
import { UserUpdateRoleComponent } from './user-update-role/user-update-role.component';
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
  path: 'user-update-bio',
  component: UserUpdateBioComponent,
  canActivate: [AuthGuard]
},
{
  path: 'user-update-email',
  component: UserUpdateEmailComponent,
  canActivate: [AuthGuard]
},
{
  path: 'user-update-password',
  component: UserUpdatePasswordComponent,
  canActivate: [AuthGuard]
},
{
  path: 'user-update-role',
  component: UserUpdateRoleComponent,
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
,
{
  path: 'quizz/:id',
  component: QuizzFormComponent
},
{
  path: 'quizz-check/:id',
  component: QuizzCheckComponent
},
{
  path: 'answer',
  component: QuizzAnswerComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'animal-list',
  component: AnimalListComponent
},
{
  path: 'animal-details/:id',
  component: AnimalItemComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
