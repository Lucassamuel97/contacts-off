import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
})
export class ContactDetailsPage {
  
  contact: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contact = this.navParams.data.contact;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailsPage');
  }

}
