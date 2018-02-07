import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  username: string;
  password: string;

  apiUrl = 'http://media.mw.metropolia.fi/wbma/';
  uploadsUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  status: string;

  constructor(public http: HttpClient) {
  }

  register(user) {
    return this.http.post(this.apiUrl + 'users', user);
  }

  login() {
    console.log('uname: ' + this.username);
    console.log('pwd: ' + this.password);

    const body = {
      username: this.username,
      password: this.password
    };

    // optional, application/json is default
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    this.http.post(this.apiUrl + 'login', body, settings).subscribe(response => {
      // "correct" way of using response is creating an interface, brackets are lazy
      console.log(response['token']);
      localStorage.setItem('localToken', response['token']);
      // this.router.navigate(['front']);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
      this.status = error.error.message;
    });
  }

  upload(formData) {
    const settings = {
      headers: new HttpHeaders().set('x-access-token',
        localStorage.getItem('localToken'))
    };
    return this.http.post(this.apiUrl + 'media', formData, settings);
  }

  getUserData() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token',
        localStorage.getItem('localToken'))
    };
    return this.http.get(this.apiUrl + 'users/user', settings);
  }

  getNewFiles() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token',
        localStorage.getItem('localToken'))
    };
    return this.http.get(this.apiUrl + 'media', settings);
  }
}
