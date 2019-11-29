import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { HomeComponent } from './user/home/home.component';
import { AuthGuardAdmin, AuthGuardUser, AuthGuardTeacher } from './_guards/auth.guardService';
import { TeacherHomeComponent } from './teacher/teacher-home/teacher-home.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // All the Admin URL
  { path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuardAdmin] },
  { path: 'user-management', component: UserManagementComponent, canActivate: [AuthGuardAdmin] },
  // All the User URL
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardUser] },
  // All the Teacher URL
  { path: 'teacher-home', component: TeacherHomeComponent, canActivate: [AuthGuardTeacher] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
