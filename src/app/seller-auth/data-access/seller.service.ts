import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { BehaviorSubject } from "rxjs";

import {LogIn, SignUp} from "../../data-type";

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)
  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  userSignUp(data: SignUp) {
    this.httpClient
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
    })
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home'])
    }
  }

  userLogIn(data: LogIn) {
    this.httpClient.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      {
        observe: 'response'
      }).subscribe((result: any) => {
        console.log(result)
      if (result && result.body && result.body.length) {
        console.log("User logged in!");
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
      } else {
        console.warn("Log in failed!");
        this.isLoginError.emit(true);
      }
    })
  }
}
