import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectloggingService {
  private projectsLoggingUrl = 'https://developerservice03.herokuapp.com/log';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }

  // //get loggedhours from server
  // getClients (): Observable<Clients[]> {
  //   return this.http.get<Clients[]>(this.projectsLoggingUrl)
  //   }
}
