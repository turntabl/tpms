import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProjectloggingService {
  private url :string ='';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient, private storedProjectUrl: CookieService) {
    this.url = this.storedProjectUrl.get("projecturl");
  }

  logproject(data: any):Observable<any>{
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(this.url + '/v1/api/addloggedproject', body,{headers: headers});
  }

  logsick(data: any):Observable<any>{
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>( this.url + '/v1/api/addloggedsick', body,{headers: headers});
  }

  logvacation(data: any):Observable<any>{
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(  this.url + '/v1/api/addloggedvaction', body,{headers: headers});
  }
  getLoggedHours(): Observable<any[]> {
    return this.http.get<any[]>( this.url + '/v1/api/getloggedhours');
  }


}
