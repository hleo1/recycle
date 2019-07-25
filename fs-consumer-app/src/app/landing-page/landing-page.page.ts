import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }
  login() {
    //alert("Feature coming soon!")
    // This should navigate to the register page:
    this.navCtrl.navigateForward("user-login-page");

  }
  ngOnInit() {
  }

}
