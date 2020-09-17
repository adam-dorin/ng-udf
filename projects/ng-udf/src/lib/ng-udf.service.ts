import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgUdfService {

  constructor() { }

  private _componentTypes = [
    'button',
    'input',
    'select'
  ]
  private directiveConfiguration: { [name: string]: any } = {};
  private $directiveConfiguration: BehaviorSubject<{ [name: string]: any }> = new BehaviorSubject({});

  setComponents(components: { [name: string]: any }) {
    Object.keys(components).forEach(key => {
      if (this._componentTypes.includes(key)) {
        this.directiveConfiguration[key] = components[key];
      } else {
        console.warn(`Type not supported! Cannot add ${key} as a component.`);
      }
    })
    this.$directiveConfiguration.next(this.directiveConfiguration);
  }

  getDirectiveConfig() {
    return this.$directiveConfiguration.asObservable();
  }

}
