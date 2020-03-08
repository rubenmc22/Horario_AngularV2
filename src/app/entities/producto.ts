import {ProductoInterface} from './interfaces/productoInterface';

export class Producto implements ProductoInterface {

  public id: number;

  constructor(
    public nombre: string,
    public cantidad: number,
    public unidad: string,
    public precio: number,
    public moneda: string,
    public imagen: string,
  ) {
    this.nombre = '';
    this.cantidad = null;
    this.unidad = '';
    this.precio = null;
    this.moneda = '';
    this.imagen = '';
  }

}
