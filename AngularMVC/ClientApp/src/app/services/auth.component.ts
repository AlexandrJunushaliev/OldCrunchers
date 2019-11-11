import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from "@angular/router";
import {timer} from "rxjs";


@Injectable({providedIn: 'root'})
export class AuthenticationService {


  constructor(private http: HttpClient, private router: Router) {

  }

  public static currentUserValue(): UserData {
    return <UserData>JSON.parse(localStorage.getItem('currentUser'));
  }

  //FIX! тут правильную ссылку и правильную обработку
  //здесь я еще храню пользователя
  //кладу токен в ответе
  public login(username: string, password: string) {
    this.http.get<string>(`/authtest`).subscribe(res => {
      localStorage.setItem('tokenExpiredTime', (Date.now() + 5000).toString());
      let userData = JSON.parse(JSON.stringify(res));
      localStorage.setItem('currentUser', JSON.stringify(userData.User));
      localStorage.setItem('AuthToken', userData.AuthToken);
      localStorage.setItem('RefreshToken', userData.RefreshToken);
      this.router.navigate(['/account']);
    }, error => {window.alert('retry attempt');
    });

  }

  public logout() {
    // remove user from local storage to log user out
    //FIX! тут скока токенов убирать?
    localStorage.removeItem('currentUser');
    localStorage.removeItem('AuthToken');
    localStorage.removeItem('tokenExpiredTime');
    localStorage.removeItem('RefreshToken');
    this.router.navigate(['/']);
  }

  static isTokenExpired() {
    if (localStorage.getItem('tokenExpiredTime') != null) {
      let tokenExpiredTime = <number>(JSON.parse(localStorage.getItem('tokenExpiredTime')));
      return Date.now() - tokenExpiredTime > 0;
    }
    return true;

  }

  public static isLogIn(): boolean {
    if(this.isTokenExpired())
    {
    }
    return !this.isTokenExpired();
  }
}




