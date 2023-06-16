import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private url = 'http://localhost:8080/cliente'
 
  constructor(private http: HttpClient) { }
  
  
  getAll(): Observable<any> {
    return this.http.get(this.url + '/total')
  }

  add(c: Client): Observable<any> {
    return this.http.post(this.url, c)
  }

  delete(id: number):Observable<any>{
    return this.http.post(this.url + '/' + id + '/delete')

  }

  update(cliente: Client):Observable<any>{
    return this.http.post(this.url + '/'+ cliente.id_Cliente + '/update', cliente)
  }
}

