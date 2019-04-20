import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
//import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {
  submissionStatus : string;

  constructor(private contactservice: ContactService,private toastController: ToastController) { }

  ngOnInit() {
  }

 
  addContactHandler(formData) {
    console.log(formData);
    this.contactservice.createContact(formData.value)
    .subscribe ( resp => {
      console.log("resp", resp);
      this.submissionStatus =" Contact added sucessfully";
      this.onSubmit();
    });
  }
  async onSubmit(){
      const toast = await this.toastController.create({
        message: 'Contact added successfully.',
        duration: 2000
      });
      toast.present();
    
      console.log("-----------added---------------");

    }

  }
  


