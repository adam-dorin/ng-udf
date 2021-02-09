import { Injectable } from '@angular/core';
import { UdfForm } from './ng-udf.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgUdfService {

  constructor() { }

  private supportedComponentTypes = [
    'button',
    'input',
    'select'
  ]
  private directiveConfiguration: { [formName:string]: { [componentName: string]: any } } = {};
  private $directiveConfiguration: { [formName: string]: BehaviorSubject<{ [name: string]: any }> } = {};

  createForm(name: string, formConfiguration: UdfForm) {
    if (!!this.directiveConfiguration[name]) {
      console.warn(`A form with '${name}' name already exists`)
    }
    this.directiveConfiguration[name] = {};
    this.$directiveConfiguration[name] = new BehaviorSubject({});
    this.setComponents(name, formConfiguration.components)
  }
  private setComponents(formName: string, components: { [name: string]: any }) {
    console.log('setComponents');
    Object.keys(components).forEach(key => {
      if (this.supportedComponentTypes.includes(key)) {
        this.directiveConfiguration[formName][key] = components[key];
      } else {
        console.warn(`Type not supported! Cannot add ${key} as a component.`);
      }
    })
    this.$directiveConfiguration[formName].next(this.directiveConfiguration[formName]);
  }

  getDirectiveConfig(formName: string) {
    return this.$directiveConfiguration[formName].asObservable();
  }

}
