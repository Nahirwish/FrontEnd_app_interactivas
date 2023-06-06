import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ClienteListComponentComponent } from './components/cliente-list-component/cliente-list-component.component';
import { ClientListComponent } from './components/cliente-list/client-list/client-list.component';
import { ClienteAddComponent } from './components/cliente-add/cliente-add/cliente-add.component';
import { ProductoListComponent } from './components/producto-list/producto-list/producto-list.component'


@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponentComponent,
    ClientListComponent,
    ClienteAddComponent,
    ProductoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
