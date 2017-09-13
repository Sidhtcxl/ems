import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  emailInfo = true;
  passInfo = true;
  fatherInfo = true;
  motherInfo = true;
  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'email': new FormControl(null, [Validators.required,
        Validators.pattern(/^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'confirm': new FormControl(null, [Validators.required]),
      'firstname': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/), Validators.minLength(2)]),
      'middlename': new FormControl(null, [Validators.pattern(/^[a-zA-Z]*$/), Validators.minLength(2)]),
      'lastname': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/), Validators.minLength(2)]),
      'fathername': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/), Validators.minLength(2)]),
      'mothername': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/), Validators.minLength(2)]),
      'address': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'mobile': new FormControl(null, [Validators.required,
        Validators.pattern(/^[1-9][0-9]{9}$/)]),
      'counselling': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]*$/)])
    });
  }

  onSubmit() {
    console.log(this.registrationForm.controls['confirm'].hasError('validateEqual'));
    console.log(Object.keys(this.registrationForm.controls['confirm'].errors).length);
  }

  keys(obj: Object) {
    return Object.keys(obj).length;
  }

}
