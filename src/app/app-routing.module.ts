import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentsComponent } from './create-students/create-students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'add', component: CreateStudentsComponent },
   { path: 'update/:id', component: StudentUpdateComponent },
  { path: 'details/:id', component: StudentDetailsComponent },
  {path: 'login', component: LoginComponent},
  // {path: 'logout', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
