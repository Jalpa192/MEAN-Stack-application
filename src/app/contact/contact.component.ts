import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  contacts: Contact[];
  contact: Contact;

  first_name: string;
  last_name: string;
  contact_number: string;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(res => {
      this.contacts = res;
    });
  }
  deleteContact(id: string) {
    let contactlist = this.contacts;
    this.contactService.deleteContact(id).subscribe(res => {
      if(res.n === 1){
        for(let i= 0; i< contactlist.length; i++){
          if(contactlist[i]._id == id){
            console.log("delete i: ",contactlist[i]._id,i, id);
            contactlist.splice(i,1);
          }
        }
      }
    });
  }
  addContact(){
    let contact ={
      first_name : this.first_name,
      last_name : this.last_name,
      contact_number : this.contact_number
    }
    this.contactService.addContact(contact).subscribe(res => 
      {
         if(res.status =="success"){
          this.contacts.push(res.data);
           this.first_name = this.last_name = this.contact_number = ""; 
         }
      }
  );
  }
}
