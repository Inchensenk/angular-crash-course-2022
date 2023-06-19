import { Injectable } from "@angular/core";
import{HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import { Observable, catchError, delay, throwError } from "rxjs";
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

  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products1', {

    //лимит на получаемое колличество товаров

      // params: new HttpParams().append('limit', 5)

      // params: new HttpParams({
      //   fromString: 'limit=5'
      // })

      params: new HttpParams({
        fromObject: {limit: 10}
      })
    }).pipe(
      delay(2000),//искуственная задержка имитации загрузки данных на 2 секунды
      catchError(this.errorHandler.bind(this))
    )
  }
  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(()=> error.message)

  }


}
