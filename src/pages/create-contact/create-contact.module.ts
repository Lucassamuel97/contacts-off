import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateContactPage } from './create-contact';

@NgModule({
  declarations: [
    CreateContactPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateContactPage),
  ],
})
export class CreateContactPageModule {}
