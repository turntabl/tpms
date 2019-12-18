import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Projectlogging } from './projectlogging';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProjectloggingService {
  private projectsUrl = 'https://developerservice03.herokuapp.com/addhours';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }

  getaddhours (): Observable<Projectlogging[]> {
    return this.http.get<Projectlogging[]>(this.projectsUrl)
    }
  loghours(data: Projectlogging):Observable<Projectlogging>{
    return this.http.post<Projectlogging>(this.projectsUrl, data);
  }
}
