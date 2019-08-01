import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import{ User } from '../models/user';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  user: {};
  id: any;
  
  constructor(private userService: UserService) {
    this.id={"id": parseInt(localStorage.getItem("id"))};
  }
  
  ngOnInit() {
    this.userService.getUserByID(this.id).then(res=>{
      this.user=res;
    }).catch(err=>{
      console.log(err);
    })
  }
getUsers() {
  UserService.prototype.getUsers().then(response => {
    console.log(response);
  }).catch(err => {
    console.log(err);
  });
}
}