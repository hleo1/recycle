import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { UserService } from '../services/user.service';
// import { resolve } from 'q';
import { User } from '../models/user';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.page.html',
  styleUrls: ['./user-login-page.page.scss'],
})
export class UserLoginPagePage implements OnInit {
  public user = new User();
  public EMAIL: string;
  public PASSWORD: string;

  public users: Array<any>;
  testId: string;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private userService: UserService
  ) { }

  ngOnInit() {
  }
  login() {
    //  let authUser = new User(); 
    // -- I would do this (add user model)
    const authUser = {
      EMAIL: this.EMAIL,
      PASSWORD: this.PASSWORD
    }
    this.userService.logIn(authUser).then(user => {
      // this.testId = localStorage.getItem('userid');
      this.navCtrl.navigateForward('tabs/tab1');
    }).catch(err => {
      console.log(err);
      this.presentAlert(err);
    });
  }
  
  register() {
    
    this.navCtrl.navigateForward("registration");

  }
  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to login',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }

}