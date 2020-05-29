import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  id:number;
  student: Student;
  submitted = false;

  constructor(private route:ActivatedRoute, private router:Router,private studentService: StudentService) {

   }

  ngOnInit(){
    this.student = new Student();

    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudents(this.id).subscribe(data => {console.log(data)
    this.student = data;
  }, error => console.log(error));


  }

  updateStudent(){
    this.studentService.updateStudents(this.id, this.student)
    .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
    this.gotoList();
  }

  gotoList(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    this.updateStudent();
    this.submitted = true;
  }

}
