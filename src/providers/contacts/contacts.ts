import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

const STORAGE_KEY = 'contacts';
/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvider {

  constructor(public storage: Storage) {
    console.log('Hello ContactsProvider Provider');
  }

  getContacts() {
    return this.storage.get(STORAGE_KEY);
  }
  
  addContact(data){
    return this.getContacts().then(result => {
        if (result) {
            data['id'] = result.length + 1;
            result.push(data);
            return this.storage.set(STORAGE_KEY, result);
          } else {
            data['id'] = 1;
            return this.storage.set(STORAGE_KEY, [data]);
          }
    });
}

}
