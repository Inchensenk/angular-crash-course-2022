import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  error$ = new Subject<string>()

  handle(message: string){
    this.error$.next(message)//уведомление всем подписчикам что произошла ошибка
  }

  //очистка ошибки
  clear(){
    this.error$.next('')
  }
}
