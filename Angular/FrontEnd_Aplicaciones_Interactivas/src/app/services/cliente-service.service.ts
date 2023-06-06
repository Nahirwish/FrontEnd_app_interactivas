import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private url = 'http://localhost:8080/cliente'
 
  constructor(private http: HttpClient) { }
  
  
  getAll(): Observable<any> {
    return this.http.get(this.url + '/total')
  }

  add(c: Client, productID: number): Observable<any> {
    return this.http.post(this.url + '/'+ productID, c)
  }
}


