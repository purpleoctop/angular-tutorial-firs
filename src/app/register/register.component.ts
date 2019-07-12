import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { RegisterService } from '../register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm;
  pass;
  user = { email: '', password: '', nickname: '' }

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [this.isValidemail()]],
      password: ['', [this.isValidPass(), this.isComplexPass()]],
      confPassword: ['', [this.isValidConfirm()]],
      nickname: ['', [this.isValidNickname()]],
      phone: ['', [this.isValidPhone()]],
      website: ['', [this.isValidWeb()]],
      checkbox: ''
    });
    this.pass = this.registerForm.get('password');

  }

  isValidemail() {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (formControl) => {
      return (!(pattern.test(formControl.value))) ? { isValidemail: { invalid: true } } : null;
    };
  }

  isValidPass() {
    return (formControl) => {
      const letterNumber = /^[a-zA-Z0-9]*$/;
      return (!(formControl.value.match(letterNumber))) ? { isValidPass: { invalid: true } } : null;
    };
  }
  isComplexPass() {
    return (formControl) => {
      return (formControl.value.length < 7) ? { isComplexPass: { invalid: true } } : null;
    };
  }
  isValidConfirm() {
    return (formControl) => {
      if (this.pass) {
        return (!(formControl.value === this.pass.value)) ? { isValidConfirm: { invalid: true } } : null;
      }
    };
  }
  isValidNickname() {
    return (formControl) => {
      const letterNumber = /^[a-zA-Z0-9_.]*$/;
      return (!(formControl.value.match(letterNumber))) ? { isValidNickname: { invalid: true } } : null;
    };
  }

  isValidPhone() {
    return (formControl) => {
      const mobile = /^((8|\+380)-?)?(\(?044\)?)?-?\d{3}-?\d{3}-?\d{3}$/;
      return (!(formControl.value.match(mobile))) ? { isValidPhone: { invalid: true } } : null;
    };
  }

  isValidWeb() {
    return (formControl) => {
      const web = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
      return (!(formControl.value.match(web))) ? { isValidWeb: { invalid: true } } : null;
    };
  }
  isDisabled() {
    return (!(this.checkbox.value));
  }

  register() {
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    this.user.nickname = this.nickname.value;

    return (this.registerForm.status === 'INVALID') ? window.alert('please check warnings section') : this.registerService.addUser(this.user);
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
