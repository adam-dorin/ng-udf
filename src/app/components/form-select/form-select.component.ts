import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UdfFormElement } from 'ng-udf';


@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {

  config: UdfFormElement;
  group: FormGroup;
  attr;
  constructor() { }

  ngOnInit(): void {
    this.attr = this.config.properties.attr
    console.log('Form Select: ',this.config);
  }

}
