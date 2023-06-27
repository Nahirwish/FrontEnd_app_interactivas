import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ClientListComponent } from './components/cliente-list/client-list/client-list.component';
import { ClienteAddComponent } from './components/cliente-add/cliente-add/cliente-add.component';
import { ProductoListComponent } from './components/producto-list/producto-list/producto-list.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClienteAddComponent,
    ProductoListComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
