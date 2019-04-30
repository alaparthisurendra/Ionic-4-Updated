import { Component, OnInit } from '@angular/core';
import { Icontact } from 'src/app/interfaces/icontact';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { EditModalPage } from './edit-modal/edit-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit {
  contactId: number;
  contactData: Icontact;

  constructor(private activatedRoute: ActivatedRoute, private contactservice: ContactService, private modalController : ModalController ) {
    this.activatedRoute.params.subscribe(params => {
      this.contactId = params['id'];
      console.log(this.contactId);
    });
  }

  ngOnInit() {
    this.contactservice.getContactsById(this.contactId)
    .subscribe((resp: Icontact) => {
      this.contactData = resp;
    });
  }

  async openEditModal(){
    const modal = await this.modalController.create({
      component: EditModalPage,
      componentProps: this.contactData
    });
    modal.present();
  }
}
