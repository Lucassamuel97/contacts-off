import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';

@IonicPage()
@Component({
  selector: 'page-contact-edit',
  templateUrl: 'contact-edit.html',
})
export class ContactEditPage {

  model: Contact;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, public contactsProvider: ContactsProvider) {
    if (this.navParams.data.contact) {
      this.model = this.navParams.data.contact;
    } else {
      this.model = new Contact();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactEditPage');
  }

  saveContact() {
    this.contactsProvider.updateContact(this.model.id, this.model)
    .then((result: any) => {
      this.toast.create({ message: 'Contato atualizado', duration: 3000 }).present();
        this.navCtrl.pop();
      })
    .catch((error: any) => {
      this.toast.create({ message: JSON.stringify(error.error), duration: 3000 }).present();
    });
  }
  
}

export class Contact {
  id: number;
  name: string;
  gender: string;
  birthday: string;
  employed: boolean;
  salary: string;
  photo: string;
}
