import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carrinho-c-item',
  templateUrl: './carrinho-c-item.component.html',
  styleUrls: ['./carrinho-c-item.component.css']
})
export class CarrinhoCItemComponent implements OnInit {
  //Any para atribuir qualquer valor
  @Input() itensDoCarrinho: any
  
  constructor() { }

  ngOnInit(){
  }

}
