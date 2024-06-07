import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-book',
  templateUrl: './food-book.component.html',
  styleUrls: ['./food-book.component.scss']
})
export class FoodBookComponent {

  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      CusName: ['', [Validators.required]],
      coffee: ['', [Validators.required]],
      dessert: [''],
      desQuant: ['', [Validators.required]]

    })
  }

  OnSave = () => {
    console.log(this.orderForm)
    console.log("happy Coffee")
  }

}
