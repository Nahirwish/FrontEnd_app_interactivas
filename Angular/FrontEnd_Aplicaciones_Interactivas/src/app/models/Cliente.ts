import {Producto} from 'src/app/models/Producto'

export class Cliente{
    id_Cliente: number
    nombre: String
    productos: Array<Producto>
}