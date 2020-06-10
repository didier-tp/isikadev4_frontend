import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginService } from '../common/service/login.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../common/data/loginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : Login  = new Login();
  message : string;

 
  constructor(private loginService : LoginService) { }

onLogin(){
//this.message="valeurs saisies=" + JSON.stringify(this.login);
this.loginService.postLogin(this.login)
.subscribe(
     (loginResponse : LoginResponse)=>{
           console.log(JSON.stringify(loginResponse));
           this.message = loginResponse.message;
           //if(login ok) alors naviguer vers basic
           //this.naviguerVersBasicSiLoginOk(loginResponse);
      },
     (err)=>{console.log(err); }
);
}
/*
private naviguerVersBasicSiLoginOk(LoginResponse: LoginResponse){
if(LoginResponse.status){
  let link = [ '/basic'];
  this._router.navigate(link);
  }
}
*/
 

  ngOnInit(): void {
  }

}
