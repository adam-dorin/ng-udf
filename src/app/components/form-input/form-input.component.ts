import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UdfFormElement } from 'ng-udf';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  constructor() { }

  config: UdfFormElement;
  group: FormGroup;
  attr;
  ngOnInit(): void {
    console.log('Form Input: ',this.config);
    this.attr = this.config.properties.attr;
    
  }

}
