import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { calcBindingFlags } from '@angular/core/src/view/util';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  users: Array<any>;
  loggedInUser: any;
<<<<<<< HEAD

  constructor(private httpClient: HttpClient) {
    

=======
//
  constructor(public http: HttpClient) {
  }
  getUsers() {
    return new Promise ((resolve, reject) => {
      this.http.get(environment.BaseUrl + 'api/users/')
        .subscribe(
          (response) => {
            resolve(response);
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
    });
>>>>>>> 35c753271943f1bd0e7009648c7aa5c597cdcac8
  }

  public logIn(Authuser: any) {

    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
<<<<<<< HEAD
      
      this.httpClient.post(environment.BaseUrl + '/api/auth/login', Authuser, { headers }).subscribe((response: any)=>{
        console.log(response.id); 
=======
      this.http.post(environment.BaseUrl + '/api/auth/login', 
      Authuser, { headers })
      .subscribe((response: any)=>{
        console.log(response.id);
>>>>>>> 35c753271943f1bd0e7009648c7aa5c597cdcac8
        localStorage.setItem('userId', response.id);
        resolve(response);
        
      },
      (err: any) => {
        console.log(err);
        reject(err);
      }

      );

      
    });

  }

  public addUser(newUser: any){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http.post(environment.BaseUrl + '/api/auth/register', newUser, { headers }).subscribe((response: any)=>{
        console.log(response.id);
        localStorage.setItem('userId', response.id);
        resolve(response);
      },
      (err: any) => {
        console.log(err);
        reject(err);
      }

      );
    });
  }

  setLoggedInUser(user: any) { 
    this.loggedInUser = user;
  }

  getLoggedInUser(): any { 
    return this.loggedInUser;
  }

}
