import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
    public EMAIL: string;
    public NAME: string;
    public SURNAME: string;
    public DOB: Date;
    public ADDRESS: string;
    public CITY: string;
    public POSTAL_CODE: number;
    public SUBURB: string;
    public CONTACT_NUMBER: string;
    public P_AVAILABLE: number;
    public P_USED: number;
    public CARBON_EMISSION: string;
    public PASSWORD: string;
    public CUSTOMER_CODE: string;
    public SIGNUP_DATE: Date;
    public APARTMENT_NAME: string;
    public UNIT_NUMBER: string;
    public COLLECTOR_ID: string;
    public COLL_DATE: Date;
    


  constructor(
    private userService: UserService,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  submit(){
    const newUser = {
      EMAIL: this.EMAIL,
            NAME: this.NAME,
            DOB: this.DOB,
            ADDRESS: this.ADDRESS,
            CITY: this.CITY,
            POSTAL_CODE: this.POSTAL_CODE,
            SUBURB: this.SUBURB,
            CONTACT_NUMBER: this.CONTACT_NUMBER,
            P_AVAILABLE: this.P_AVAILABLE,
            P_USED: this.P_USED,
            CARBON_EMISSION: this.CARBON_EMISSION,
            PASSWORD: this.PASSWORD,
            CUSTOMER_CODE: this.CUSTOMER_CODE,
            SIGNUP_DATE: this.SIGNUP_DATE,
            APARTMENT_NAME: this.APARTMENT_NAME,
            UNIT_NUMBER: this.UNIT_NUMBER,
            COLLECTOR_ID: this.COLLECTOR_ID,
            COLL_DATE: this.COLL_DATE
            
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
