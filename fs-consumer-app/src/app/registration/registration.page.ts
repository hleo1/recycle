import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public email: string;
  public address: string;
  public collector_id: number;
  public remali: number;
  public points: number;
  public kg_recycled: number;
  public emissions: number;
  public firstName: string;
  public lastName: string;
  public photo: string;
  public type: string;
  public collection_date: Date;
  public password: string;
  public suburb: string;
  public postal_code: string;
  public city: string;
  public cellPhone: string;
    


  constructor(
    private userService: UserService,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  submit(){
    const newUser = {
      email: this.email,
    address: this.address,
    collector_id: this.collection_date,
    remali: this.remali,
    points: this.points,
    kg_recycled: this.kg_recycled,
    emissions: this.emissions,
    firstName: this.firstName,
    lastName: this.lastName,
    photo: this.photo,
    type: this.type,
    collection_date: this.collection_date,
    password: this.password,
    suburb: this.suburb,
    postal_code: this.postal_code,
    city: this.city,
    cellPhone: this.cellPhone
           
            
    }
    this.userService.addUser(newUser).then(res =>{
      const testId = localStorage.getItem('userid');
      console.log(res);
      this.navCtrl.navigateForward('tabs/tab1');
      //   queryParams:
      //   { user:res }
      // });
    }).catch(err =>{
      this.presentAlert(err);
    });
  }
  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to register',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }
}
