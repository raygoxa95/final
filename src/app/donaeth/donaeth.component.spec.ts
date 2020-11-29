import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaethComponent } from './donaeth.component';

describe('DonaethComponent', () => {
  let component: DonaethComponent;
  let fixture: ComponentFixture<DonaethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonaethComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonaethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
