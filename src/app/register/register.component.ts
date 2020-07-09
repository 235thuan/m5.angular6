import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

function comparePassword(c: AbstractControl): any {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}


@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {validators: comparePassword}),
      country: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      age: ['', [Validators.required, Validators.min(18), Validators.pattern('[0-9]*')]],
      gender: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      phone: ['', [Validators.required, Validators.pattern('/^\\+84\\d{9,10}$/')]]
    });
    // update form state
    this.loginForm.patchValue({
      email: 'info@example.com'
    });
  }

  get Field(): FormGroup {
    return this.loginForm;
  }

  onSubmit(): void {
    console.log(this.loginForm);
  }
}
