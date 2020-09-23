import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UdfForm } from './ng-udf.model';
import { NgUdfService } from './ng-udf.service';

@Component({
  selector: 'ng-udf',
  template:`
  <form class="dynamic-form" *ngIf="form" [formGroup]="form">
  <ng-container 
      *ngFor="let field of config.elements;" 
      dynamicField 
      [component]="components[field.type]" 
      [config]="field"
      [group]="form"> </ng-container>
  </form>
  `,
  styles: [
  ]
})
export class NgUdfComponent implements OnDestroy, OnInit {

  private $directiveConfig: Subscription;

  @Input() config: UdfForm;
  components;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private udfService: NgUdfService
  ) {

    this.$directiveConfig =
      this.udfService.getDirectiveConfig().subscribe(components => {
        this.components = components;
      });
  }

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    // debugger;
    this.config.elements.forEach(control => {
      // TODO: Check the ussage here: https://angular.io/api/forms/FormBuilder#control-usage-notes
      // https://angular.io/api/forms/FormBuilder#control
      console.log(control)
      group.addControl(control.name, this.fb.control(control.value))
    });
    return group;
  }

  ngOnDestroy() {
    this.$directiveConfig.unsubscribe();
  }

}
