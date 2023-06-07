import {Producto} from 'src/app/models/Product'

export class Cliente{
    id_Cliente: number
    nombre: String
    productos: Array<Producto>
}