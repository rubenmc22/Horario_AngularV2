import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Componentes
import { Producto } from '../entities/producto';
import { Global } from './global';

@Injectable()
export class ProductoService {
  public url: string;

  constructor(
    public http: HttpClient,
  ) {
    this.url = Global.url;
  }

  /*-------------------------------------------------------------------------------------------------------
  ------------------------------------Metodos CRUD Hibernate----------------------------------------------
  -------------------------------------------------------------------------------------------------------*/

  // CRUD Hibernate
  getProducto() {
    return this.http.get<Producto[]>(
      this.url + '/productosList',
      {
        observe: 'response',
        responseType: 'json',
      });
  }

  postProducto(producto: Producto) {

    const json = JSON.stringify(producto);
    const params = json;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });



    return this.http.post<Producto>(this.url + '/productoAdd',
      params, {
      headers
    });
  }

  updateProductos() {

  }

  deleteProductos() {

  }

  /*-------------------------------------------------------------------------------------------------------
   ------------------------------------Finish CRUD Hibernate----------------------------------------------
   -------------------------------------------------------------------------------------------------------*/

  addFileRequest(
    url: string,
    params: Array<string>,
    files: Array<File>
  ) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();
      let i = 0;

      for (i; i < files.length; i++) {
        formData.append('uploadImg[]', files[i], files[i].name);
      }
      xhr.onreadystatechange =
        result => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(JSON.parse(xhr.response));
            } else {
              reject(xhr.response);
            }
          }
        };
      xhr.open('POST', url, true);
      xhr.send(formData);
    });

  }


}



