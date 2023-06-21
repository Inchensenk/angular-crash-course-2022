import { Injectable } from "@angular/core";
import{HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import { Observable, catchError, delay, retry, tap, throwError } from "rxjs";
import { IProduct } from "../models/product";
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: 'root'//для регистрации сервиса в корневом модуле
})


export class ProductsService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
    ){
  }

  products: IProduct[]=[]

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
    }).pipe(
      delay(200),//искуственная задержка имитации загрузки данных на 2 секунды
      retry(2),
      tap( products => this.products = products),
      catchError(this.errorHandler.bind(this))
    )
  }
  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(()=> error.message)
  }


  create(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
    .pipe(
      tap(prod => this.products.push(prod))
    )
  }

}
