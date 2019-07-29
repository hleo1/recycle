import { Component } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}


getUsers() {
  UserService.prototype.getUsers().then(response => {
    console.log(response);
  }).catch(err => {
    console.log(err);
  });
}
}