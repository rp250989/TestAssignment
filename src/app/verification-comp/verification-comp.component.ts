import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-verification-comp',
  templateUrl: './verification-comp.component.html',
  styleUrls: ['./verification-comp.component.css']
})
export class VerificationCompComponent implements OnInit {

  @ViewChild('verificationForm',null) verificationForm: NgForm;
  constructor() { }

  ngOnInit(): void {
   
  }
  
  title:string="Verification Form"
  city:string
  fullname:string
  email:string
  panNumber:string
  mobile:string
  otp:number

  onFormSubmit(verificationform:NgForm){
    console.log(verificationform.value)
  }

  onMobileChange(verificationform:any){
    console.log(verificationform.value)
  }
}
