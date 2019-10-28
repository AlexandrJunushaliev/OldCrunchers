import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  static Category = class {
  public name:string;
  public route:string;
  constructor(name:string,route:string)
  {
    this.name=name;
    this.route=route;
  }
};

  title = 'app';
  public items = [new AppComponent.Category("mobile","/counter"),new AppComponent.Category("computers","/counter")];
  public showCat()
  {

  }
}
