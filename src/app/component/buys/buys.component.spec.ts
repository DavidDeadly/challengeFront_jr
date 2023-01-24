import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuysComponent } from './buys.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestsService } from 'src/app/services/requests/requests.service';

describe('BuysComponent', () => {
  let component: BuysComponent;
  let fixture: ComponentFixture<BuysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RequestsService],
      declarations: [BuysComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
