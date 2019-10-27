import {Component, OnInit} from "@angular/core";
import{Router,ActivatedRoute,Params} from "@angular/router";

@Component({
  templateUrl:"./search.component.html"
})
export class SearchComponent {
  text: string;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.text = params['text'];
    });
  }
}
