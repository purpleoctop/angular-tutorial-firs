import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Users} from "../users";
import { LoginService } from "../login.service"



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm;
loggedUser;
isAuth;
check
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
    ) { 
    this.loginForm= formBuilder.group({
      email:[''],
      password:['']
    })
  }

  ngOnInit() {
  }

  get mail(){
    return this.loginForm.get('email') as FormControl;
  }
  get password(){
    return this.loginForm.get('password') as FormControl;
  }


  login(){ 
     this.isAuth=this.loginService.checkUser(this.mail.value, this.password.value);
     return this.isAuth ? this.loginService.accessUsers() : this.loginService.blockUsers();
  }







}
