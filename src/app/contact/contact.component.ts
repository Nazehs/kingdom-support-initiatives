import { Component, OnInit } from '@angular/core';
import {NgForm, FormControl} from '@angular/forms';
import { MainServiceService } from '../providers/main-service.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


frm: FormGroup;
  public hasFailed = false;
  public showInputErrors = false;
  public isbusy = false;
  successMessage;
  errorMessage

constructor(public formbuilder: FormBuilder,private router: Router, private service:MainServiceService) {
  this.frm = formbuilder.group({
    name: ["", Validators.required],
    email:new FormControl('',Validators.compose([Validators.required, Validators.email])),
    subject: ["", Validators.required],
    message: ["", Validators.required],
    organisation: [""]
  });
  // this.contactUs();

 }

ngOnInit() {
}

public contactUs() {
  // validate form
  if (this.frm.invalid) {
    this.showInputErrors = true;
    return;
  }
  // reset status
  this.isbusy = true;
  this.hasFailed = false;

  const name = this.frm.get("name").value;
  const message = this.frm.get("message").value;
  const subject = this.frm.get("subject").value;
  const email = this.frm.get("email").value;
  const organisation = this.frm.get("organisation").value;
  // const message = this.frm.get("message").value;
  
  const contact ={
    message:message,
    name:name,
    email:email,
    subject:subject,
    organisation:organisation,
    messageid:Date.now()
  }
  console.log(contact);
  

  this.service.contactUs(contact).subscribe((Response)=>{
    if(Response['data']){
      // this.frm.reset(this.frm.value);
      this.frm.reset();
      this.isbusy=false;
    this.successMessage ='Message was send succssfully and we will contact you ASAP';

    setTimeout(()=>{
      this.successMessage = '';
    }, 5000)

    }else{
      this.errorMessage="Ooops! There was a problem sending your message. Pls ttry again!!"
      this.isbusy=false;
      
    setTimeout(()=>{
      this.errorMessage = '';
    }, 5000)
    }
    // console.log(Response);
    
  })
}

 

}
