import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {


  constructor(private http: HttpClient) {

  }

  public static currentUserValue(): UserData {
    return <UserData>JSON.parse(localStorage.getItem('currentUser'));
  }

  //FIX! тут правильную ссылку и правильную обработку
  //здесь я еще храню пользователя
  //кладу токен в ответе
  public login(username: string, password: string) {
    return  this.http.get<string>(`/authtest`).subscribe(res=>{
      let userData = JSON.parse(JSON.stringify(res));

      localStorage.setItem('currentUser', JSON.stringify(userData.User));
      localStorage.setItem('tokenBornTime',Date.now().toString());
      localStorage.setItem('token',userData.Token);},error => {});
  }

  public logout() {
    // remove user from local storage to log user out
    //FIX! тут скока токенов убирать?
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenBornTime');
  }
  static isTokenExpired(){
    if (localStorage.getItem('tokenBornTime')!=null)
    {
      let tokenBornTime = <number>(JSON.parse(localStorage.getItem('tokenBornTime')));
      return Date.now()-tokenBornTime>1800000;
    }
    return true;

  }
  public static isLogIn():boolean{
    return !this.isTokenExpired();
  }
}




