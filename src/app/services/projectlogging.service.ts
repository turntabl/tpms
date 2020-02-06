import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectloggingService {
<<<<<<< HEAD

=======
>>>>>>> d80648488902f78d3096347583751983fa299011
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

<<<<<<< HEAD
  constructor( private http: HttpClient) {this.http.get<any>(window.location.origin +'/project_service').
  subscribe(res =>{sessionStorage.setItem('url',res.url)
  })
}

  logproject(data: any):Observable<any>{
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(  sessionStorage.getItem('url') + '/v1/api/addloggedproject', body,{headers: headers});
=======
  constructor( private http: HttpClient)  {this.http.get<any>(window.location.origin +'/employee_service').
  subscribe(res =>{sessionStorage.setItem('url',res.url)
  })
}
  logproject(data: any):Observable<any>{
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(sessionStorage.getItem('url') + '/v1/api/addloggedproject', body,{headers: headers});
>>>>>>> d80648488902f78d3096347583751983fa299011
  }

  logsick(data: any):Observable<any>{
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
<<<<<<< HEAD
    return this.http.post<any>(  sessionStorage.getItem('url') + '/v1/api/addloggedsick', body,{headers: headers});
=======
    return this.http.post<any>(sessionStorage.getItem('url')  + '/v1/api/addloggedsick', body,{headers: headers});
>>>>>>> d80648488902f78d3096347583751983fa299011
  }

  logvacation(data: any):Observable<any>{
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
<<<<<<< HEAD
    return this.http.post<any>(  sessionStorage.getItem('url')+ '/v1/api/addloggedvaction', body,{headers: headers});
  }
  getLoggedHours(): Observable<any[]> {
    return this.http.get<any[]>(  sessionStorage.getItem('url') + '/v1/api/getloggedhours');
=======
    return this.http.post<any>(sessionStorage.getItem('url')  + '/v1/api/addloggedvaction', body,{headers: headers});
  }
  getLoggedHours(): Observable<any[]> {
    return this.http.get<any[]>(sessionStorage.getItem('url') + '/v1/api/getloggedhours');
>>>>>>> d80648488902f78d3096347583751983fa299011
  }


}
