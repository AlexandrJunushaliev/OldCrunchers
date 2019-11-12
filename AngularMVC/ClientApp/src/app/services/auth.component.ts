import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';
import {Router} from "@angular/router";
import * as $ from "jquery";


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
      let respData = JSON.parse(JSON.stringify(res));
      localStorage.setItem('currentUser', JSON.stringify(respData.User));
      this.refreshAuthToken(respData.AuthToken);
      localStorage.setItem('RefreshToken', respData.RefreshToken);
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

  isTokenExpired() {
    if (localStorage.getItem('tokenExpiredTime') != null) {
      let tokenExpiredTime = <number>(JSON.parse(localStorage.getItem('tokenExpiredTime')));
      return Date.now() - tokenExpiredTime > 0;
    }
    return true;

  }

  refreshAuthToken(token:string)
  {
    localStorage.setItem('AuthToken',token);
    localStorage.setItem('tokenExpiredTime', (Date.now() + 5000).toString());
  }

  public isLogIn(): boolean {

    return localStorage.getItem('RefreshToken')!=null;
  }
}




