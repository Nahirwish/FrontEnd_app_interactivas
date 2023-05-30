import { Observable } from 'rxjs'
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http'

export class ClienteService{


    getAll(): Observable<any> {
        return this.http.get(this.url + '/total')
    }
}