import { Component, OnInit } from '@angular/core';
import { SellerService } from "../data-access/seller.service";
import { Router } from "@angular/router";
import { SignUp } from "../../data-type";

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
  constructor(
    private sellerService: SellerService,
    private router: Router,
  ) {
  }

  showLogin = false;
  authError = '';

  ngOnInit() {
    this.sellerService.reloadSeller()
  }

  signUp(data: SignUp): void {
    console.warn(data);
    this.sellerService.userSignUp(data);
  }

  logIn(data: SignUp): void {
    // console.warn(data);
    this.sellerService.userLogIn(data);
    this.sellerService.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = "Email or password is not correct!!!"
      }
    })
  }

  openLogin() {
    this.showLogin = !this.showLogin;
  }
}
