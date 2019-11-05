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
  public show( obj )
  {
    /*/!*let cat1 = Object.assign(HTMLDataListElement,obj);
    let cat2 = obj as HTMLDataListElement;
    const cat3 :HTMLDataListElement=obj;
    console.log(cat1);
    console.log(cat2);
    console.log(cat3);*!/
    let cat = obj as HTMLElement;
    console.log(cat);*/
  }
  public hide(obj)
  {

    /*let cat = obj as HTMLDataListElement;
    console.log(cat);
    cat.style.color="red";*/
  }
}
