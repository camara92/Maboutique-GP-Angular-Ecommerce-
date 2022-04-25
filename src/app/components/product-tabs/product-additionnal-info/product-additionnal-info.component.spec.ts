import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdditionnalInfoComponent } from './product-additionnal-info.component';

describe('ProductAdditionnalInfoComponent', () => {
  let component: ProductAdditionnalInfoComponent;
  let fixture: ComponentFixture<ProductAdditionnalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAdditionnalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdditionnalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
