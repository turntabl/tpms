import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
// import { ToastService } from 'ng-uikit-pro-standard';

declare var $: any;


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  showSucessAlert: Boolean
  successMsg: string;
  showErrorAlert:Boolean
  errorMsg: string

  constructor(private ProjectService: ProjectService) {
  }

  projectForm = new FormGroup({
  project_name: new FormControl(''),
  });


  ngOnInit() {
    this.ProjectService.getProject().subscribe(response => {
      
      });
    }

  onSubmit() { 
  
    $("#modalSubscriptionForm").modal("hide"); 
    $('.modal-backdrop').remove();
    
    var test = true
    if(test == true){
      this.showSucessAlert = true;
      this.successMsg = "Success"
    }else{
      this.showErrorAlert = true;
      this.errorMsg = "Error"
    }
    
  }

}
