import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-text-input.component';



@NgModule({
  declarations: [
    CustomInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomInputComponent
  ]
})
export class CustomInputTextModule { }
