import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceapiService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http : HttpClient) { }

  getData() : Observable<any> {
       return this.http.get(`${this.apiUrl}/list`);
  }

  saveData(address : any) : Observable<any>{
    const headers = new HttpHeaders({
       'Content-Type' : 'application/json',
    });
    return this.http.post(`${this.apiUrl}/save`,address, { headers });
  } 
}
