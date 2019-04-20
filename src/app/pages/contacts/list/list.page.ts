import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Icontact } from 'src/app/interfaces/icontact';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  contactList:Icontact[];
  textString ='';

  constructor(private contactservice:ContactService) { }

  ngOnInit() {
    console.log("Inside init method");
    
    this.contactservice.getContacts()
    .subscribe ( (resp: Icontact[]) => {
      console.log("resp", resp);
      if(resp && resp.length>0){
        this.contactList=resp;
    }
    });
    
  }
  searchEvent( event ) {

    const text = event.target.value;
    this.textString = text;


  }

}
