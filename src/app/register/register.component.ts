import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm;
  constructor(
    private formBuilder: FormBuilder
  ) {

    this.registerForm = this.formBuilder.group({
      email: ['', [this.isValidemail()]],
      password: '',
      confPassword: '',
      nickname: '',
      phone: '',
      website: ''
    });
  }
  isValidemail(email) {
    return (formControl) => {
      return formControl.value.includes('@') ? true : false;
    };
  }
  get email() {
    return this.registerForm.get('email') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormGroup;
  }

  get confPassword() {
    return this.registerForm.get('confPassword') as FormControl;
  }
  get nickname() {
    return this.registerForm.get('nickname') as FormControl;
  }

  get phone() {
    return this.registerForm.get('phone') as FormControl;
  }
  get website() {
    return this.registerForm.get('website') as FormControl;
  }
  ngOnInit() {
  }

}
