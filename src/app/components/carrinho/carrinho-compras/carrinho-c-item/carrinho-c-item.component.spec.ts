import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoCItemComponent } from './carrinho-c-item.component';

describe('CarrinhoCItemComponent', () => {
  let component: CarrinhoCItemComponent;
  let fixture: ComponentFixture<CarrinhoCItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrinhoCItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoCItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
