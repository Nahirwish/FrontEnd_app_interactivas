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

  get id(){return this.clientForm.get('id')}
  get nombre(){return this.clientForm.get('nombre')}


  addClient(){
    let c = new Client()
    c.id = this.id.value
    c.nombre = this.nombre.value

    this.clientService.add(c).subscribe(()=>{
      this.id.setValue('')
      this.nombre.setValue('')
    })

  }
  

}
