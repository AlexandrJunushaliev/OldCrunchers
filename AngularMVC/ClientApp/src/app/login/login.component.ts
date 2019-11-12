import {Component} from "@angular/core";
import {AuthenticationService} from "../services/auth.component";
import construct = Reflect.construct;

@Component({
  templateUrl: "./login.component.html"
})

export class LoginComponent {
  constructor(private auth: AuthenticationService) {
  }

  login(email: string, password: string) {
    this.auth.login("lol", "kek");
  }
}
