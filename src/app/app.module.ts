import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MushroomListComponent } from './mushroom-list/mushroom-list.component';
import { MushroomItemComponent } from './mushroom-item/mushroom-item.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventItemComponent } from './event-item/event-item.component';
import { EventFormComponent } from './event-form/event-form.component';
import { QuizzFormComponent } from './quizz-form/quizz-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthGuard } from './services/auth.guard';
import { LoginService } from './services/login.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserUpdateEmailComponent } from './user-update-email/user-update-email.component';
import { UserUpdatePasswordComponent } from './user-update-password/user-update-password.component';
import { UserUpdateBioComponent } from './user-update-bio/user-update-bio.component';
import { UserUpdateRoleComponent } from './user-update-role/user-update-role.component';
import {MatRadioModule} from '@angular/material/radio';
import { QuizzAnswerComponent } from './quizz-answer/quizz-answer.component';
import { ContactComponent } from './contact/contact.component';
import { QuizzCheckComponent } from './quizz-check/quizz-check.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateAdminComponent } from './user-update-admin/user-update-admin.component';
import { EventUpdateComponent } from './event-update/event-update.component';
import { MushroomFormComponent } from './mushroom-form/mushroom-form.component';
import { MushroomUpdateComponent } from './mushroom-update/mushroom-update.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalUpdateComponent } from './animal-update/animal-update.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'; 
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReplacePipe } from './pipes/replace.pipe';
import { UserUpdatePhotoComponent } from './user-update-photo/user-update-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserProfileComponent,
    MushroomListComponent,
    MushroomItemComponent,
    EventListComponent,
    EventItemComponent,
    EventFormComponent,
    QuizzFormComponent,
    UserUpdateComponent,
    UserUpdateEmailComponent,
    UserUpdatePasswordComponent,
    UserUpdateBioComponent,
    UserUpdateRoleComponent,
    QuizzAnswerComponent,
    ContactComponent,
    QuizzCheckComponent,
    AnimalListComponent,
    AnimalItemComponent,
    UserListComponent,
    UserUpdateAdminComponent,
    EventUpdateComponent,
    MushroomFormComponent,
    MushroomUpdateComponent,
    AnimalFormComponent,
    AnimalUpdateComponent,
    ReplacePipe,
    UserUpdatePhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatRadioModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })

  ],
  providers: [LoginService,AuthGuard,[{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true }]],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}