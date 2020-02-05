import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeName = new BehaviorSubject("");
  developerName = this.employeeName.asObservable();
  
  constructor(private http: HttpClient) {this.http.get<any>(window.location.origin +'/employee_service').
  subscribe(res =>{sessionStorage.setItem('url',res.url)
  })
}

  changeMessage(namr: string) {
    this.employeeName.next(name);
  }
  getEmployeeRole(email: string): Observable<any> {
    return this.http.get<any>(
      sessionStorage.getItem('url') + "/v1/api/login/" + email
    );
  }

  addEmployee(requestBody: any): Observable<any> {
    let body = JSON.stringify(requestBody);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
   
    return this.http.post<any>(
      sessionStorage.getItem('url') + '/v1/api/employee',body,{headers: headers} );
  }
  getLoggedHours(): Observable<any[]> {
    return this.http.get<any[]>(sessionStorage.getItem('url')+ "log");
  }
  getLoggedHoursForDev(empId: string): Observable<any[]> {
    return this.http.get<any[]>(
      sessionStorage.getItem('url') + "projectlogged/dev/" + empId
    );
  }
  getDevelopers(): Observable<any> {
    return this.http.get<any>(sessionStorage.getItem('url')+ "/v1/api/employees");
  }
}
