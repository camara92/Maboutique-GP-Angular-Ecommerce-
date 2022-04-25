import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementCardComponent } from './paiement-card.component';

describe('PaiementCardComponent', () => {
  let component: PaiementCardComponent;
  let fixture: ComponentFixture<PaiementCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
