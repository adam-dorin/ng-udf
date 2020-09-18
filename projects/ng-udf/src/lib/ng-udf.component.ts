import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NgUdfService } from './ng-udf.service';

@Component({
  selector: 'ng-udf',
  template: `
  <form class="dynamic-form [formGroup]="form" >
        <ng-container
          *ngFor="let field of config;"
          dynamicField
          [component]="components[field.type]"
          [config]="field"
          [group]="form">
        </ng-container>
      </form>  
  `,
  styles: [
  ]
})
export class NgUdfComponent implements OnInit, OnDestroy {

  private $directiveConfig: Subscription;

  @Input() config: any[] = [];

  components;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private udfService: NgUdfService) {

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
    this.config.forEach(control => {
      // TODO: Check the ussage here: https://angular.io/api/forms/FormBuilder#control-usage-notes
      group.addControl(control.name, this.fb.control(true))
    });
    return group;
  }

  ngOnDestroy() {
    this.$directiveConfig.unsubscribe();
  }

}
