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
  public email: string;
  public password: string;
  public id: number;

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

    const authUser = {
      id: this.id,
      email: this.email,
      password: this.password
    }
    this.userService.logIn(authUser).then(user => {
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
      message: err.message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
