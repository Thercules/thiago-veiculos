import { Injectable } from '@angular/core';
import { Produtos } from 'src/app/model/produtos'
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  //Colocarei a variável em inglês para nao causar conflito, 
  //mas confesso que poderia por outra variavel, mas não me veio a cabeça na hora.
  products: Produtos[] = [
    new Produtos(1, 'product 1', 'Esse é o 1 produto', 63430),
    new Produtos(2, 'product 2', 'Esse é o 2 produto', 63430), 
    new Produtos(3, 'product 3', 'Esse é o 3 produto', 63430), 
    new Produtos(4, 'product 4', 'Esse é o 4 produto', 63430), 
    new Produtos(5, 'product 5', 'Esse é o 5 produto', 63430), 
    new Produtos(6, 'product 6', 'Esse é o 6 produto', 63430),
    new Produtos(7, 'product 7', 'Esse é o 7 produto', 63430), 
    new Produtos(8, 'product 8', 'Esse é o 8 produto', 63430),
    new Produtos(9, 'product 9', 'Esse é o 9 produto', 63430),   
  ]

  constructor() { }

  getProdutos(): Produtos[] {
    // -> Produtos para integrar com uma API - Retornar e observar
    return this.products
  }
}
