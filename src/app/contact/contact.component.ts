import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from "../api.service"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  getName='';
  getEmail='';
  getMsg='';
  onSubmit(data:NgForm){
  
    console.log(data.value)
  this.api.sendData(data.value).subscribe((response)=>
{
   console.log(response)
})
  }
  constructor(private api:ApiService) { }

  ngOnInit() {
  }

}
