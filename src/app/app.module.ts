import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { FiltrosComponent } from './components/carrinho/filtros/filtros.component';
import { ListaProdutosComponent } from './components/carrinho/lista-produtos/lista-produtos.component';
import { CarrinhoComprasComponent } from './components/carrinho/carrinho-compras/carrinho-compras.component';
import { CarrinhoCItemComponent } from './components/carrinho/carrinho-compras/carrinho-c-item/carrinho-c-item.component';
import { ProdutosComponent } from './components/carrinho/lista-produtos/produtos/produtos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    CarrinhoComponent,
    FiltrosComponent,
    ListaProdutosComponent,
    CarrinhoComprasComponent,
    CarrinhoCItemComponent,
    ProdutosComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
