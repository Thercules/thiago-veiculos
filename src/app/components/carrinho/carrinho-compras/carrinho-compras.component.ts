import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/model/produtos';
import { MensagensService } from 'src/app/services/mensagens.service'


@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {
  //Iniciando criação da funcionalidade de adicionar ao carrinho
  itensDoCarrinho = [
    /* {id: 1, productId: 1, productName: 'Teste 1', qnt: 4, price: 63430},
    {id: 2, productId: 3, productName: 'Teste 3', qnt: 5, price: 63430},
    {id: 3, productId: 2, productName: 'Teste 2', qnt: 3, price: 63430},
    {id: 4, productId: 4, productName: 'Teste 4', qnt: 2, price: 63430}, */
  ];

  carrinhoTotal = 0

  constructor(private msg: MensagensService) { }

  ngOnInit() {
    //tentei por o subscribe para sobreescrever o observável, e deu certo kkkk
    //meia hora pra perceber que faltava apenas um parênteses kkkkk
    this.msg.getMsg().subscribe((produtos: Produtos) => {
      this.adicionarProduto(produtos)
    })
  }

  adicionarProduto(produtos: Produtos) {
      //Nota4: Tentativa de fazer um método mais simples... ví na internet... 
      let productExists = false 
      
      for(let i in this.itensDoCarrinho){
        if(this.itensDoCarrinho[i].productId === produtos.id) {
          this.itensDoCarrinho[i].qnt ++ 
          productExists = true
          break;
        }
      }

      if(!productExists) {
        this.itensDoCarrinho.push({
          productID: produtos.id,
          productName: produtos.name,
          qnt: 1, 
          price: produtos.price, 
        })
      }

      //Nota: let item in this cart - Deixe itens no carrinho.
      //Nota2: [i] simboliza item 
      //Nota3: Este método que ví em um vídeo é considerado complexo, e acabei aprendendo um mais simples. Acima.
      /*     if(this.itensDoCarrinho.length === 0) {
        this.itensDoCarrinho.push({
          productID: produtos.id,
          productName: produtos.name,
          qnt: 1, 
          price: produtos.price, 
        })
      } else {
        for(let i in this.itensDoCarrinho){
          if(this.itensDoCarrinho[i].productId === produtos.id) {
            this.itensDoCarrinho[i].qnt ++ 
          } else {
            this.itensDoCarrinho.push({
              productID: produtos.id,
              productName: produtos.name,
              qnt: 1, 
              price: produtos.price, 
            })
          }
        }
      } */
      
      this.carrinhoTotal = 0
      this.itensDoCarrinho.forEach(item => {
        this.carrinhoTotal += (item.qnt * item.price)
      })
  }
}
