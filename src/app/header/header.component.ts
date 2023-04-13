import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuType: String = 'default';
  sellerName: String = '';
  constructor(private router: Router) {
  }

  ngOnInit() {

    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.log("In seller area!!!")
          this.menuType = 'seller'
          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerDate = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerDate.name;
          }
        } else {
          console.log("Outside seller area!!!")
          this.menuType = 'default'
        }
      }
    })
  }

  logOut() {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
}
