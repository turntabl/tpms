import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectInterface } from './screens/project-interface';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private projectUrl = 'http://employmentprofilingapp-env.dbqsnkfqpq.us-east-2.elasticbeanstalk.com';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}
  //  adding project to db
  addNewProject(body: ProjectInterface): Observable<ProjectInterface> {
    return this.http.post<ProjectInterface>(
      this.projectUrl + '/projects/add',
      body
    );
  }

  getProject(): Observable<any> {
    return this.http.get<any>(this.projectUrl + '/v1/api/projects');
  }

  getAssignedProject(employee_id: string): Observable<any> {
    return this.http.get<any>(
      this.projectUrl + 'v1/api/project//assign/employee/' + employee_id
    );
  }


  assignProjecttoDev(project_id: number, body:number): Observable<ProjectInterface[]> {
      return this.http.post<ProjectInterface[]>(this.projectUrl + "/projects/assign/"+ project_id,body);
  }
 

}
