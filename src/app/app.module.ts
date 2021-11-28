import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LogoutComponent } from './logout/logout.component';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserProfileComponent,
    MushroomListComponent,
    MushroomItemComponent,
    EventListComponent,
    EventItemComponent,
    EventFormComponent,
    QuizzFormComponent
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
    MatToolbarModule


  ],
  providers: [LoginService,AuthGuard,[{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
