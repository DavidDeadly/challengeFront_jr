import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishBuyComponent } from './finish-buy.component';

describe('FinishBuyComponent', () => {
  let component: FinishBuyComponent;
  let fixture: ComponentFixture<FinishBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishBuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
