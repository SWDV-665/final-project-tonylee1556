import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  title="Registerations"
  users=[];
  constructor() { }
  registerUser(form:NgForm){
    console.log(form.value);
  }
  ngOnInit() {
  }

}
