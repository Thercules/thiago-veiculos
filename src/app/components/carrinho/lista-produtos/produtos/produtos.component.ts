import { Component, OnInit, Input } from '@angular/core';
import { Produtos } from 'src/app/model/produtos';
import { MensagensService } from 'src/app/services/mensagens.service'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  @Input() productItem: Produtos

  constructor(private msg: MensagensService) { }

  ngOnInit(){
  }

  colocarNoCarrinho() {
    this.msg.sendMsg(this.productItem)
  }
}
