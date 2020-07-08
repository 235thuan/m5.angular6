import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): any {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      age: ['', [Validators.required, Validators.min(18), Validators.pattern('[0-9]*')]],
      gender: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      phone: ['', [Validators.required, Validators.pattern('/^\\+84\\d{9,10}$/')]]
    });
  }

  onSubmit(): any {
    console.log(this.loginForm);
  }
}
