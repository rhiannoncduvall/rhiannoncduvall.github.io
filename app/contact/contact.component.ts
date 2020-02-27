import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailInput: string;
  recipientInput: string;
  message: string;
  sendYourselfCopy: boolean;

  constructor() { }

  ngOnInit() {
  }

}
