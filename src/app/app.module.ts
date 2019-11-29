import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './user/home/home.component';
import { IndexComponent } from './index/index.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { AuthenticationService } from './_services/authentication.service'
import { AuthGuardAdmin, AuthGuardUser, AuthGuardTeacher } from './_guards/auth.guardService';
import { TeacherHomeComponent } from './teacher/teacher-home/teacher-home.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    IndexComponent,
    AdminPanelComponent,
    UserManagementComponent,
    TeacherHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, AuthGuardAdmin, AuthGuardUser, AuthGuardTeacher],
  bootstrap: [AppComponent]
})
export class AppModule { }
