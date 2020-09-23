import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UdfFormElement } from 'ng-udf';


@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {

  config: UdfFormElement;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
    console.log('Form Button: ',this.config);
  }

}
