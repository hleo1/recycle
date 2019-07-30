import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  why() {
    this.navCtrl.navigateForward("learn-why");

  }

  how() {
    this.navCtrl.navigateForward("learn-how");
  }

  what() {
    this.navCtrl.navigateForward("learn-what")
  }

  ngOnInit() {
  }

}
