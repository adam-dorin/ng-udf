import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective {

  @Input() config;
  @Input() component;
  @Input() group: FormGroup;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {

    if (!this.config) {
      console.warn(`Component not set, but still used in the config`);
      console.warn(this.config);
      return null;
    }

    if (this.component) {
      const factory = this.resolver.resolveComponentFactory<any>(this.component);
      this.component = this.container.createComponent(factory);
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    } 
  }

}
