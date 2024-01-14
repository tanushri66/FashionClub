import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircareComponent } from './haircare.component';

describe('HaircareComponent', () => {
  let component: HaircareComponent;
  let fixture: ComponentFixture<HaircareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaircareComponent]
    });
    fixture = TestBed.createComponent(HaircareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
