import { TestBed } from '@angular/core/testing';

import { NgUdfService } from './ng-udf.service';

describe('NgUdfService', () => {
  let service: NgUdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgUdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
