import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

/*import iplocation from "iplocation";*/

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent {
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

  /*ngOnInit(): void {
    iplocation("56.70.97.8")
      .then((res) => {
        this.city = res.city;
      })
      .catch(err => {
      });

  }*/
}
