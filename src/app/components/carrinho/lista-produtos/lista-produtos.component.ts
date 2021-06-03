import { Component, OnInit } from '@angular/core';
//Importação de produtos e ProdutosServices
import { Produtos } from 'src/app/model/produtos';
import { ProdutosService } from 'src/app/services/produtos.service' 

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  //Declarando como productsList para não haver conflito depois.
  productsList: Produtos[] = []

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.productsList = this.produtosService.getProdutos()
  }
}
