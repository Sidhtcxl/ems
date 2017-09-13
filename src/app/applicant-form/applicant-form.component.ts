import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-applicant-form',
  templateUrl: './applicant-form.component.html',
  styleUrls: ['./applicant-form.component.css']
})
export class ApplicantFormComponent implements OnInit {
  applicationForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.applicationForm = new FormGroup({
      'firstname': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Z]*$/)]),
      'midname': new FormControl(null, [Validators.minLength(2), Validators.pattern(/^[A-Z]*$/)]),
      'lastname': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Z]*$/)]),
      'father': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Z]*$/)]),
      'mother': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Z]*$/)]),
      'guardian': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Z]*$/)]),
      'enrollno': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      'rollno': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      'percentile': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]\d*(\.\d+)?$/)]),
      'rank': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+$/)]),
      'aadhar': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+$/)]),
      'address': new FormControl(null, [Validators.required]),
      'pin': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{6}$/)]),
      'district': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]),
      'mobile': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]{1}\d{9}$/)])
    });
  }

}
