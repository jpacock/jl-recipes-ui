import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/core';
import { Router, NavigationEnd } from '@angular/router'


@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  brandText = "JL Recipes";
  loggedIn = false;
  constructor(
    // private authService: AuthService,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      // see also 
      if(localStorage.getItem('currentUser'))
        this.loggedIn = true;
      else
        this.loggedIn = false;
    });
  }

  ngOnInit() {
    // check to see if logged in
    if (localStorage.getItem('currentUser'))
      this.loggedIn = true
  }

  logout() {
    // this.authService.logout();
    this.router.navigate([''])
  }

}