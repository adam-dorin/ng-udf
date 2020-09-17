import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { NgUdfModule } from 'ng-udf';


@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    NgUdfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
