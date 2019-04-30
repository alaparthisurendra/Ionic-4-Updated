import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
//import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { ToastController } from '@ionic/angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { Icontact } from 'src/app/interfaces/icontact';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {
  submissionStatus: string;


  constructor(private contactservice: ContactService, 
    private toastController: ToastController, private contacts: Contacts) {

  }

  ngOnInit() {
  }


  addContactHandler(formData) {

    console.log(formData);
      this.contactservice.createContact(formData.value)
     .subscribe ( (resp:Icontact) => {
       console.log("resp", resp);
       let contact: Contact = this.contacts.create();
       contact.name = new ContactName(null, resp.name,'Kishore');
       contact.phoneNumbers = [new ContactField('mobile', resp.phone)];
       contact.save().then(
         () => console.log('Contact saved!', contact),
         (error: any) => console.error('Error saving contact.', error)
       );
       this.submissionStatus =" Contact added sucessfully";
       this.onSubmit();
     }); 
    
  }

  async onSubmit() {
    const toast = await this.toastController.create({
      message: 'Contact added successfully.',
      duration: 2000
    });
    toast.present();

    console.log("-----------added---------------");

  }

}



