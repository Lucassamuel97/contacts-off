import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactsListPage } from './contacts-list';

@NgModule({
  declarations: [
    ContactsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactsListPage),
  ],
})
export class ContactsListPageModule {}
