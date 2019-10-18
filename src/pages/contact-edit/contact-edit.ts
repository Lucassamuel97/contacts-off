import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ContactsProvider } from '../../providers/contacts/contacts';

@IonicPage()
@Component({
  selector: 'page-contact-edit',
  templateUrl: 'contact-edit.html',
})
export class ContactEditPage {

  model: Contact;

  constructor(public navCtrl: NavController, private camera: Camera, public navParams: NavParams, private toast: ToastController, public contactsProvider: ContactsProvider) {
    if (this.navParams.data.contact) {
      this.model = this.navParams.data.contact;
    } else {
      this.model = new Contact();
    }
  }

  takePicture() {
    this.model.photo = "";

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
    };
    
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.model.photo = base64image;
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })
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
