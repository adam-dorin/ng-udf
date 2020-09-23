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
  config: UdfForm = {
    elements:[
      {
        type: 'input',
        name: 'name',
        value:'',
        properties:{
          attr:{
            placeholder: 'Enter your name',
            label:'Full name'
          }
        } 
      },
      {
        type:'select',
        name: 'food',
        value:'',
        properties:{
          attr:{
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
    ]
  }

  components: UdfComponentList = { // need a better interface that enforces the list
    input: FormInputComponent,
    select: FormSelectComponent,
    button: FormButtonComponent,
  }

  constructor(private udfService: NgUdfService) {
    this.udfService.setComponents(this.components)
  }
}
