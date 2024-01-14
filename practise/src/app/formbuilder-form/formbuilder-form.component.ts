import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder-form',
  templateUrl: './formbuilder-form.component.html',
  styleUrls: ['./formbuilder-form.component.css']
})
export class FormbuilderFormComponent {
  userRegForm!: FormGroup;


  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.userRegForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      mobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', Validators.required, Validators.email]
    })
  }

  save() {
    console.log("Form Data ", this.userRegForm);
  }

  get firstName() {
    return this.userRegForm.get('firstName');
  }

  get lastName() {
    return this.userRegForm.get('lastName');
  }

  get mobileNo() {
    return this.userRegForm.get('mobileNo');
  }
}

