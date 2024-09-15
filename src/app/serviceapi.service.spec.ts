import { TestBed } from '@angular/core/testing';

import { ServiceapiService } from './serviceapi.service';

describe('ServiceapiService', () => {
  let service: ServiceapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
