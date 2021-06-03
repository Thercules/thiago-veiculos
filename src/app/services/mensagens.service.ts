import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  subject = new Subject() 

  constructor() { }
  //Método para enviar requisição
  sendMsg(produtos) { 
    console.log(produtos)
    this.subject.next(produtos) //Gatilho
  }
  //Receber requisição
  getMsg() {
    return this.subject.asObservable() 
  }
}
