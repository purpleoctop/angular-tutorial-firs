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
    private formBuilder: FormBuilder,
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [this.isValidemail()]],
      password: ['', [this.isValidPass()]],
      confPassword: ['', [this.isValidConfirm()]],
      nickname: ['', [this.isValidNickname()]],
      phone: ['', [this.isValidPhone()]],
      website: ['', [this.isValidWeb()]],
      checkbox: ''
    });
  }

  isValidemail() {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (formControl) => {
      return (!(pattern.test(formControl.value))) ? {isValidemail: {invalid : true}} : null;
    };
  }

  isValidPass() {
    return(formControl) => {
      const letterNumber = /^[a-zA-Z0-9]*$/;
      return((!(formControl.value.match(letterNumber))) && (formControl.value.length > 7)) ? {isValidPass: {invalid : true}} : null;
    };
  }
  isValidConfirm() {
    return(formControl) => {
      return(formControl.value) ? {isValidConfirm: {invalid : true}} : null;
    };
  }

  isValidNickname() {
    return(formControl) => {
      const letterNumber = /^[a-zA-Z0-9_.]*$/;
      return(!(formControl.value.match(letterNumber))) ? {isValidNickname: {invalid : true}} : null;
    };
  }

  isValidPhone() {
    return(formControl) => {
      const mobile = /^((8|\+380)-?)?(\(?044\)?)?-?\d{3}-?\d{3}-?\d{3}$/;
      return(!(formControl.value.match(mobile))) ? {isValidPhone: {invalid : true}} : null;
    };
  }

  isValidWeb() {
    return(formControl) => {
      const web = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
      return(!(formControl.value.match(web))) ? {isValidWeb: {invalid : true}} : null;
    };
  }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
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

  get checkbox() {
    return this.registerForm.get('checkbox') as FormControl;
  }
  ngOnInit() {
  }

}
