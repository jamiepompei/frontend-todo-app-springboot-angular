import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';


export const TOKEN = 'token';
export const AUTHENTTICATED_USER = 'authenticaterUser';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  

  constructor(
    private http: HttpClient
  ) { }

  authenticate(username, password){
    if(username === 'pompy' && password === 'dummy'){
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }


  executeBasicAuthenticationService(username, password){
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
    {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    );
}

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTTICATED_USER)
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTTICATED_USER)
    sessionStorage.removeItem(TOKEN)

  }
}

export class AuthenticationBean{

  constructor(public message:string){}
}