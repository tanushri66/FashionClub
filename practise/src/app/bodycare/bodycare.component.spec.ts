import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodycareComponent } from './bodycare.component';

describe('BodycareComponent', () => {
  let component: BodycareComponent;
  let fixture: ComponentFixture<BodycareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodycareComponent]
    });
    fixture = TestBed.createComponent(BodycareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
