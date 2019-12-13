import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectInterface } from './screens/project-interface';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectUrl = "https://projectservice02.herokuapp.com/projects";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  //  adding project to db
  addNewProject(body: ProjectInterface):Observable<ProjectInterface> {
    return this.http.post<ProjectInterface>(this.projectUrl, body);
  }
}
