import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent implements OnInit{
  isExpanded = false;

  constructor(private router:Router){}
  collapse() {
    this.isExpanded = false;
  }



  city;
  isLoggedIn = false;

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
