import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthResponseData, AuthService } from '../auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  loginMode = true;
  error; string;

  constructor(private authService: AuthService, private routerService: Router) { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null ,[Validators.required, Validators.minLength(6)])
    });
  }
  

  onLogin(){
    console.log("onLogin()");
    this.loginMode = true;
    this.onSubmit();
  }

  onSignUp(){
    console.log("onSignUp()");
    this.loginMode = false;
    this.onSubmit();
  }

  onSubmit() {
    // email & password
    const email= this.authForm.value.email;
    const password = this.authForm.value.password;

    //Interact with authservice
    let authObs: Observable<AuthResponseData>;
    this.error = null;
    if (this.loginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    // Wait for result
    authObs.subscribe(
      (response) => {
        console.log(response);
        this.routerService.navigate(["/post-list"]);
      },
      (errorMessage) =>{
        this.error= errorMessage;
        console.log(errorMessage);
      }
    );
    this.authForm.reset();
  }

}
