import { Component, OnInit } from '@angular/core';
// Reactive forms
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent {
  addProjectForm = new FormGroup({
    Project_title: new FormControl(''),
    Project_description: new FormControl(''),

  });
}

