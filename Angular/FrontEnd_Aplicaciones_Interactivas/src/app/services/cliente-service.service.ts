<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private url = 'http://localhost:8080/cliente'
 
  constructor(private http: HttpClient) { }
  
  
  getAll(): Observable<any> {
    return this.http.get(this.url + '/total')
  }

  add(c: Cliente): Observable<any> {
    return this.http.post(this.url, c)
  }

  delete(id: number):Observable<any>{
    return this.http.post(this.url + '/' + id + '/delete')

  }

  update(cliente: Cliente):Observable<any>{
    return this.http.post(this.url + '/'+ cliente.id_Cliente + '/update', cliente)
  }
}


=======
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from '../models/Client';

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

  delete(id: number):Observable<any>{
    return this.http.post(this.url + '/' + id + '/delete')

  }

  update(cliente: Cliente):Observable<any>{
    return this.http.post(this.url + '/'+ cliente.id_Cliente + '/update', cliente)
  }
}


>>>>>>> 28d473966660ac8d137765347ae7737d1fc020d6
