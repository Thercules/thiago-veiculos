import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoComprasComponent } from './carrinho-compras.component';

describe('CarrinhoComprasComponent', () => {
  let component: CarrinhoComprasComponent;
  let fixture: ComponentFixture<CarrinhoComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrinhoComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
