import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';

/**
 * Generated class for the CreateContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-contact',
  templateUrl: 'create-contact.html',
})
export class CreateContactPage {
  model: Contact;

  constructor(public navCtrl: NavController, public navParams: NavParams, public contactsProvider: ContactsProvider) {
    this.model = new Contact();
    this.model.name = 'Novo contato';
    this.model.gender = 'male';
  }

  createContact() {
    var data = { 'name': this.model.name, 'gender': this.model.gender };
    this.contactsProvider.addContact(data)
      .then((result: any) => {
        console.log('Contato criado');
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateContactPage');
  }

}

export class Contact {
  name: string;
  gender: string;
}
