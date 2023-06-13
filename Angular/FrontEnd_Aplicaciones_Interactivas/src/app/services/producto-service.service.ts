import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  private url = 'http://localhost:8080/producto'

  constructor(private http: HttpClient) { }

    
  getAll(): Observable<any> {
    return this.http.get(this.url + '/total')
  }
}
