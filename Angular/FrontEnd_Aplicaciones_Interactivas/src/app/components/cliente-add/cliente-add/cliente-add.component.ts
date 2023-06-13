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
  id: number
  nombre: String
  clientForm: FormGroup

  constructor(private clientService: ClienteServiceService)

  ngOnInit(){
    this.id = 0
    this.nombre = ""
  }

  get id(){return this.clientForm.get('id')}
  get nombre(){return this.clientForm.get('nombre')}


  add(){
    let c = new Client()
    c.id = this.id.value
    c.nombre = this.nombre.value

    this.clientService.add(c).subscribe(()=>{
      this.id.setValue('')
      this.nombre.setValue('')
    })

  }
  

}

