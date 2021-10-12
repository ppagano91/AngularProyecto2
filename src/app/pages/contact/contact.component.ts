import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  formData = {
    name: 'Juan',
    email: '',
    age: 0,
    mailingList: true,
  };

  constructor() {}

  ngOnInit(): void {}

  resetName(): void {
    this.formData.name = '';
  }

  sendFormData(): void {
    if (
      this.formData.name !== '' &&
      this.formData.email !== '' &&
      this.formData.age > 0
    )
      console.log(this.formData);
  }
}
