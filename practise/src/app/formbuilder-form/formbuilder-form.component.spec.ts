import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderFormComponent } from './formbuilder-form.component';

describe('FormbuilderFormComponent', () => {
  let component: FormbuilderFormComponent;
  let fixture: ComponentFixture<FormbuilderFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormbuilderFormComponent]
    });
    fixture = TestBed.createComponent(FormbuilderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
