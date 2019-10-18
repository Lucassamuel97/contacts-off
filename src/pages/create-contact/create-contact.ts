import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
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

  constructor(public navCtrl: NavController, private camera: Camera, public navParams: NavParams, private toast: ToastController, public contactsProvider: ContactsProvider) {
    this.model = new Contact();
    this.model.name = 'Novo contato';
    this.model.gender = 'male';
    this.model.birthday = '1997-08-12';
    this.model.employed = false;
    this.model.salary = '1000.0';
    this.model.photo = '';
  }

  createContact() {
    var data = {
        'name': this.model.name,
        'gender': this.model.gender,
        'birthday': this.model.birthday,
        'employed': this.model.employed,
        'salary': this.model.salary,
        'photo': this.model.photo,
    };
    console.log(data);
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

}
export class Contact {
  name: string;
  gender: string;
  birthday: string;
  employed: boolean;
  salary: string;
  photo: string;
}
