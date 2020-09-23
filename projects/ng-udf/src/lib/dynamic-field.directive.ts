import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UdfFormElement } from './ng-udf.model';

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective {

  @Input() config: UdfFormElement;
  @Input() component;
  @Input() group: FormGroup;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  private resolveComponent() {
    return this.resolver.resolveComponentFactory<any>(this.component)
  }

  private warning() {
    console.warn(`Component not set, but still used in the config`);
    console.warn(this.config);
    return null;
  }
  ngOnInit() {

    if (!this.config) {
      return this.warning();
    }
    if (this.component) {
      this.component = this.container.createComponent(this.resolveComponent());
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

}
