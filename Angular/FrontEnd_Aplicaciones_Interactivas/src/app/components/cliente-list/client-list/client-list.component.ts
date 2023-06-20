import { Component, Inject, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { Producto } from 'src/app/models/Product';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { ProductoServiceService } from 'src/app/services/producto-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clientList = new Array<Client>
  productList = new Array<Producto>


  constructor(private modalService: NgbModal, private clientService: ClienteServiceService,private productService:  ProductoServiceService){}

  ngOnInit(){
    this.clientService.getAll().subscribe(totalResponse =>{
      this.clientList = totalResponse
      
    },
    error =>{
      console.error(error)
      alert("Error:"+ error.error)
    }

    )
    this.productService.getAll().subscribe(response =>{
      this.productList =response
    })
  }


  delete(id){
    this.clientService.delete(id).subscribe(() =>{
      location.reload()
      alert("Se eliminó correctamente")
    },
    error =>{
      console.error(error)
      if(error.status === 500){
        alert("Error: No se puede eliminar ")
      }
    }
    
    )
  }

  add(){
    let c = new Client()
    c.nombre = (document.getElementById("nombre") as HTMLInputElement).value
    this.clientService.add(c).subscribe(()=>{
      location.reload()

    })
  }

  view(client: Client, view: any){
    this.modalService.open(view).result.then(()=>{
      let c = new Client()
      c.id_Cliente = client.id_Cliente
      c.nombre = client.nombre

      this.clientService.update(c).subscribe(()=>{
        location.reload()
      })
    })
  }
  

}
