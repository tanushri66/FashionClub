import { Component } from '@angular/core';
///import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  // userRegForm!: FormGroup;

  // ngOnInit() {
  //   this.userRegForm = new FormGroup({
  //     firstName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern('[a-zA-Z]{2,50}')]),
  //     LastName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern('[a-zA-Z]{2,50}')]),
  //     MobileNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),]),
  //     Email: new FormControl('', [Validators.required, Validators.email])

  //   })
  // }


  // save() {
  //   console.log("Form Data", this.userRegForm);
  //   console.log("Form Data", this.userRegForm.value);
  // }

  // get firstName() {
  //   return this.userRegForm.get('firstName');
  // }

  // get LastName() {
  //   return this.userRegForm.get('LastName');
  // }

  // get MobileNo() {
  //   return this.userRegForm.get('MobileNo');
  // }
  // get Email() {
  //   return this.userRegForm.get('Email');
  // }


}


