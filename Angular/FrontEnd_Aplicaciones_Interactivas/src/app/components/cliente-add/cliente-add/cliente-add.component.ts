import { Component } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { Observable, of} from 'rxjs'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent {
  id: number
  nombre: String
  clientForm: FormGroup

  constructor(private clientService: ClienteServiceService){}

  ngOnInit(){
    this.id = 0
    this.nombre = ""
  }

  getid(){return this.clientForm.get('id')}
  getnombre(){return this.clientForm.get('nombre')}


  add(){
    let c = new Client()
    c.id_Cliente = this.id.valueOf()
    c.nombre = this.nombre.valueOf()

    this.clientService.add(c).subscribe(()=>{
      this.id = this.id
      this.nombre = this.nombre
    })

  }
  

}

