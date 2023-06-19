import { Injectable } from "@angular/core";
import{HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from "rxjs";
import { IProduct } from "../models/product";

@Injectable({
  providedIn: 'root'//для регистрации сервиса в корневом модуле
})


export class ProductsService {
  constructor(private http: HttpClient){
  }

  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {

    //лимит на получаемое колличество товаров

      // params: new HttpParams().append('limit', 5)

      // params: new HttpParams({
      //   fromString: 'limit=5'
      // })

      params: new HttpParams({
        fromObject: {limit: 5}
      })
    })
  }
}
