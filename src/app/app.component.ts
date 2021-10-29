import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ux-trendz-course';
  defaultCourse: string = "Select a course";
  genders = [
    {'id': 1, 'gender': 'Male'},
    {'id': 2, 'gender': 'Female'}
  ]; 
  defaultGender: string = 'Male';

  onSubmit(formTemplateRef: NgForm) {
    console.log( formTemplateRef );
  }

  setUserName(testForm: NgForm){
    testForm.setValue({
      userDetails: {
        username: 'Hello World',
        email: 'subha@gmail.com'
      },
      course: 'Angular',
      gender: 'Female'
    })
  }
}
