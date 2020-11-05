import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRights } from './models/auth';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class MockauthService {

  gatewayUrl = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }
  users  = {
    "1" : {
          userId : "1",
          userName:"admin",
          password:"admin1234",
          email:"admin@abc.com",
          rights:UserRights.FULL
    },
    "2" : {
      userId : "2",
      userName:"John",
      password:"1234",
      email:"John@abc.com",
      rights:UserRights.VIEW
}
  }

  login(userDetails){
    const loginObservable = new Observable(subscriber => {
      let response = this.validateUser(userDetails) 
      subscriber.next(response);
      subscriber.complete();

    })
    return loginObservable;
  }

  validateUser(userToAuth){
    let validUser = Object.entries(this.users).filter(user => (user[1].userName == userToAuth.userName) && (user[1].password == userToAuth.password))
    if(validUser.length > 0) return {status: true , validUser : validUser[0][1]}
    return {status: false}
  }
}
