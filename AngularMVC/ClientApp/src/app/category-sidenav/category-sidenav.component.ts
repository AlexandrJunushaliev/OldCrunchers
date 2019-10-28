import {Component} from "@angular/core";
@Component({
  selector:'category-sidenav',
  templateUrl:'./category-sidenav.component.html'
})
export class CategorySidenavComponent {
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
  public items = [new CategorySidenavComponent.Category("mobile","/counter"),new CategorySidenavComponent.Category("computers","/counter")];
  public show()
  {
    console.log("showed");
  }
  public hide()
  {
    console.log("hided");
  }
}
