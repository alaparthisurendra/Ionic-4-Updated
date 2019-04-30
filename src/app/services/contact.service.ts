import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, delay } from 'rxjs/operators';
import { Icontact } from '../interfaces/icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  createContact(contactData) {
    console.log(contactData);
    
    return this.http.post('https://jsonplaceholder.typicode.com/users', contactData)
    .pipe(map((resp) => {
      console.log(resp);
      return resp;
      }));
    }

    getContacts() {
      console.log('inside getcontacts()');
      return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((resp) => {
        console.log(resp);
        return resp;
        }));
    }
    getContactsById(id) {
      console.log(id);
      return this.http.get('https://jsonplaceholder.typicode.com/users/' + id)
      .pipe(map((resp) => {
        console.log(resp);
        return resp;
        }));
    }

    getUsuarios() {

      return this.http.get<Icontact[]>( 'https://jsonplaceholder.typicode.com/users' )
                .pipe(
                  delay( 2500 )
                );
  
    }
}
