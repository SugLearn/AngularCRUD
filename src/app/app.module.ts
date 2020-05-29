import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentsComponent } from './create-students/create-students.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorServiceService } from './login/http-interceptor-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentsComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorServiceService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
