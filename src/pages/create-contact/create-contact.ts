import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, public contactsProvider: ContactsProvider) {
    this.model = new Contact();
    this.model.name = 'Novo contato';
    this.model.gender = 'male';
  }

  createContact() {
    var data = { 'name': this.model.name, 'gender': this.model.gender };
    this.contactsProvider.addContact(data)
      .then((result: any) => {
        this.toast.create({ message: 'Contato criado', duration: 3000}).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Falha ao criar o contato: ' + error.error , duration: 3000}).present();
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
