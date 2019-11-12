import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import {AuthenticationService} from "../services/auth.component";


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent implements OnInit{
  isExpanded = false;

  constructor(private router:Router,private auth:AuthenticationService){}
  collapse() {
    this.isExpanded = false;
  }



  city;

  isLoggedIn(){return this.auth.isLogIn();}
  logout(){
    return this.auth.logout();
  }

  public search(){

    let text = (<HTMLInputElement>document.getElementById('idSearch')).value;
    this.router.navigate(['/search'],{queryParams:{text:text}})
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {
    console.log('until ex');
    $.getJSON('https://ipinfo.io/json', function(data) {
      console.log('as');
      console.log(data.ip);
    });
  }

}
