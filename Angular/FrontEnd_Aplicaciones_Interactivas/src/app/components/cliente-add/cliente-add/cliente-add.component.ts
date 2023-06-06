import { Component } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import {Observable, of} from 'rxjs'


@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent {
  c = new Client()
  clientForm: FormGroup

  constructor(private clientService: ClienteServiceService)

  ngOnInit(){
    this.c.id = ""
    this.c.nombre = ""
  }

}
