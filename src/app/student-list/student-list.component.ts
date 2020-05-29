import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:Observable<Student[]>;


  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.students = this.studentService.getStudentList();
  }

  details(id:number){
    this.router.navigate(['details',id]);

  }

  delete(id:number){
    this.studentService.deleteStudents(id).subscribe(data => {console.log(data);
    this.reloadData()},
    error => console.log(error)
    );
  }

  update(id:number){
    this.router.navigate(['update',id]);
  }

  

}
