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
            data['id'] = result[result.length - 1].id + 1;
            result.push(data);
            return this.storage.set(STORAGE_KEY, result);
          }else{
            data['id'] = 1;
            return this.storage.set(STORAGE_KEY, [data]);
          }
    });
  }

  getContact(id: number) {
    let resultado: any;
    return this.getContacts().then(result => {
      if (result) {
        result.forEach(element => {
          if (element.id == id) {
            resultado = element;
          }
        });
        return resultado;
      }
    });
  }

  destroyContact(id: number) {
    return this.getContacts().then(result => {
      if (result) {
        for (let index = 0; index < result.length; index++) {
          if (result[index].id == id) {
            result.splice(index, 1);
            return this.storage.set(STORAGE_KEY, result);
          }     
        }
      }
    });
  }

  updateContact(id: number, data) {
    return this.getContacts().then(result => {
      if (result) {
        for (let index = 0; index < result.length; index++) {
          if (result[index].id == id) {
            result.splice(index, 1, data);
            return this.storage.set(STORAGE_KEY, result);
          }     
        }
      }
    });
  }
}
