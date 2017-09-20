import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { Contact } from './contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  // get contact list
  getContacts(){
    return this.http.get("http://localhost:3200/api/contacts").map(res => res.json());
  }

   // get contact list
   addContact(newContact){

    var headers = new Headers();
    headers.append('content-Type','application/json');
    return this.http.post("http://localhost:3200/api/contact",newContact,{headers:headers}). map(res => res.json());
  }

    // get contact list
    deleteContact(id){
      return this.http.delete("http://localhost:3200/api/contact/"+id).map(res => res.json());
    }
}
