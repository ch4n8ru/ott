import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Login } from '../data/state/auth/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store : Store) { }

  ngOnInit(): void {
    
  }

  loginForm = new FormGroup({
    userName: new FormControl('' , [Validators.required]),
    password: new FormControl('' , [Validators.required]),
  });


  onLogin(){
    this.store.dispatch(new Login(this.loginForm.value))
  }
}
