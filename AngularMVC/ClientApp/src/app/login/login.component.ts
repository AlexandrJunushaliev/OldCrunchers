import {Component} from "@angular/core";
import {AuthenticationService} from "../services/auth.component";
import construct = Reflect.construct;

@Component({
  templateUrl: "./login.component.html"
})

export class LoginComponent {
  constructor(private auth: AuthenticationService) {
  }

  login() {
    $(function () {
      let createAllErrors = function () {
        let form = $(this);
        let errorList = $('ul.errorMessages', form);

        let showAllErrorMessages = function () {
          errorList.empty();

          //Find all invalid fields within the form.
          form.find(':invalid').each(function (index, node) {

            //Find the field's corresponding label
            let label = $('label[for=' + node.id + ']');

            //Opera incorrectly does not fill the validationMessage property.
            let message = (<HTMLInputElement>node).validationMessage || 'Invalid value.';
            errorList
              .show()
              .append('<li><span>' + label.html() + '</span>: ' + message + '</li>');
          });
        };

        $('input[type=submit], button', form).on('click', showAllErrorMessages);
        $('input[type=text]', form).on('keypress', function (event) {
          //keyCode 13 is Enter
          if (event.keyCode == 13) {
            showAllErrorMessages();
          }
        });
      };

      $('form').each(createAllErrors);
    });
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;
    if (email.match
      ("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
      && password.length > 7) {
      this.auth.login(email, password);
    }
  }
}
