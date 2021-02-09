import { Component } from '@angular/core';
import { NgUdfService, UdfComponentList, UdfForm } from 'ng-udf';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name1: string = 'TestForm1';
  name2: string = 'TestForm2';
  get config(): UdfForm {
    return {
      elements: [
        {
          type: 'input',
          name: 'name',
          value: '',
          properties: {
            attr: {
              placeholder: 'Enter your name',
              label: 'Full name'
            }
          }
        },
        {
          type: 'select',
          name: 'food',
          value: '',
          properties: {
            attr: {
              label: 'Favourite food',
              options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
              placeholder: 'Select an option',
            }
          }
        },
        {
          type: 'button',
          name: 'submit',
          value: 'Submit'
        }
      ],
      components: { // need a better interface that enforces the list
        input: FormInputComponent,
        select: FormSelectComponent,
        button: FormButtonComponent,
      }
    }
  }

  constructor(private udfService: NgUdfService) {
 
    this.udfService.createForm(this.name1, this.config)
    this.udfService.createForm( this.name2, this.config)
  }
}
