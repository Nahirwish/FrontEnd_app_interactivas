import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { Producto } from 'src/app/models/Product';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clientList = new Array<Client>
  productList = new Array<Producto>


  constructor(private clientService: ClienteServiceService,private productService: ProductoServiceService)

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
    Cliente c = new Client()
    c.nombre = document.getElementById("nombre").value
    this.clientService.add(c, producto.value ).subscribe(()=>{
      location.reload()

    })
  }

  view(client: Client, view)
  

}
