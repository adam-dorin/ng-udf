import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { NgUdfComponent } from './ng-udf.component';
import { DynamicFieldDirective } from './dynamic-field.directive';



@NgModule({
  declarations: [
    NgUdfComponent,
    DynamicFieldDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NgUdfComponent,
    DynamicFieldDirective
  ]
})
export class NgUdfModule { }
