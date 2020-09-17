import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgUdfService } from './ng-udf.service';


@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective {

  @Input() config;
  @Input() component;
  @Input() group: FormGroup;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,

  ) { }

  ngOnInit() {
    console.log(this.config, this.component, this.group);
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
    } else {

    }
  }

}
