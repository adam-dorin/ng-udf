import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUdfComponent } from './ng-udf.component';

describe('NgUdfComponent', () => {
  let component: NgUdfComponent;
  let fixture: ComponentFixture<NgUdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgUdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
