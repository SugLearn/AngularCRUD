import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, onErrorResumeNext } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl ='http://localhost:8080/api/v1'; 

  constructor(private http: HttpClient) { }
   

  getStudentList():Observable<any>{
    
    const headers = new HttpHeaders()
  .set('Content-type', 'application/json')
  .set('Access-Control-Allow-Origin', 'http://localhost:4200')
  .set('Access-Control-Allow-Methods', 'GET')
  .set('Access-Control-Allow-Credentials', 'true')
  .set('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, X-Requested-With, Accept');
  
    return this.http.get(`${this.baseUrl}/getStudents`,{headers: headers});
    

  }
  createStudents(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/Students`, student);
  }

  getStudents(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/getStudentsById/${id}`);
  }

  deleteStudents(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteStudent/${id}`,{responseType: 'text'});
  }

  updateStudents(id:number, value: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/UpdateStudent/${id}`,value);
    

  }
}
