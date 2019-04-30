import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Icontact } from 'src/app/interfaces/icontact';


@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.page.html',
  styleUrls: ['./edit-modal.page.scss'],
})
export class EditModalPage implements OnInit {
userId: number = null;
contactData: Icontact;

contactDetailsForm= new FormGroup({
  name: new FormControl('', Validators.required)
});

  constructor( private navParams: NavParams,private modalController : ModalController ) { }

  updateContact()
  {
    console.log(this.contactData);
  }
  ngOnInit() {
    console.log(this.navParams);
    this.userId=this.navParams.data.id;
    this.contactData=this.navParams.data as Icontact;
  }

  closeModal(){
  this.modalController.dismiss();
}
}
