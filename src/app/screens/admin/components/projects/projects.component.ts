import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from 'src/app/project.service';
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

  constructor(private ProjectService: ProjectService,public activeModal: NgbActiveModal) {
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
    
    // var formValues = this.projectForm.value;
    // let requestData = { project_name: formValues.project_name,}
    // this.ProjectService
    //   .addNewProject(requestData)
    //   .subscribe(response =>{
    //     console.log(response)
    //   })
    
  }

}
