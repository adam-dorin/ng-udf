import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UdfForm } from './ng-udf.model';
import { NgUdfService } from './ng-udf.service';

@Component({
  selector: 'ng-udf',
  template: `
  <form class="dynamic-form"  [formGroup]="form" (ngSubmit)="onSubmit()">
  <ng-container 
      *ngFor="let field of configuration.elements; trackBy: fieldTracker" 
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

  @Input() configuration: UdfForm;
  @Input() formName: string;

  @Output() submit: EventEmitter<any> = new EventEmitter();

  components;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private udfService: NgUdfService
  ) { }

  ngOnInit() {
    this.$directiveConfig =
      this.udfService.getDirectiveConfig(this.formName).subscribe(components => {
        this.components = components;
        this.form = this.createGroup();
      });
  }

  createGroup() {
    // TODO: move this method in a private service
    const group = this.fb.group({});
    // debugger;
    this.configuration.elements.forEach(control => {
      // TODO: Check the ussage here: https://angular.io/api/forms/FormBuilder#control-usage-notes
      // https://angular.io/api/forms/FormBuilder#control
      if (control.validation) {
        // TODO: use the fb.control to get .valueChanges https://angular.io/api/forms/AbstractControl#valueChanges
        //       and subscribe to any changes that would be pushed when the form values change
        group.addControl(control.name,
          this.fb.control(control.value,
            control.validation.validatorOrOpts || null, control.validation.asyncValidator || null)
        );
      } else {
        group.addControl(control.name, this.fb.control(control.value));
      }
    });
    return group;
  }

  onSubmit() {
    // TODO: refactor this to be a part of the service rather than the component
    this.submit.emit(this.form);
  }

  fieldTracker(index, field: any) {
    return field.type;
  }

  ngOnDestroy() {
    this.$directiveConfig.unsubscribe();
  }

}
