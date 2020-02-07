import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private url :string = '';
  private employeeName = new BehaviorSubject("");
  developerName = this.employeeName.asObservable();

  constructor(
    private http: HttpClient,
    private storedEmployeeUrl: CookieService
  ) {
    this.url = this.storedEmployeeUrl.get("employeeurl");
  }
  changeMessage(namr: string) {
    this.employeeName.next(name);
  }
  getEmployeeRole(email: string): Observable<any> {
    return this.http.get<any>(this.url + "/v1/api/login/" + email);
  }

  addEmployee(requestBody: any): Observable<any> {
    let body = JSON.stringify(requestBody);
    let headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http.post<any>(this.url + "/v1/api/employee", body, {
      headers: headers
    });
  }
  getLoggedHours(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "log");
  }
  getLoggedHoursForDev(empId: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + "projectlogged/dev/" + empId);
  }
  getDevelopers(): Observable<any> {
    return this.http.get<any>(this.url + "/v1/api/employees");
  }
}
