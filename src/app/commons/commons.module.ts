import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodBookComponent } from './food-book/food-book.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const route: Routes = [
  { path: 'book-coffee', component: FoodBookComponent },
  { path: 'about', component: ContactComponent }
]

@NgModule({
  declarations: [
    FoodBookComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule
  ]
})
export class CommonsModule { }
