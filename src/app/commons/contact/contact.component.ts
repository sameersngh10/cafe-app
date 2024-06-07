import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup

  constructor(private builder: FormBuilder) {
    this.contactForm = this.builder.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      address: ['', [Validators.required]],
      address2: ['',],
      pincode: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', Validators.required],
      landmark: ['']
    })
  }
  OnSubmit = () => {
    console.log(this.contactForm)
  }
}
