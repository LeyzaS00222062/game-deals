import { TestBed } from '@angular/core/testing';

import { CheapskateApiService } from './cheapskate-api.service';

describe('CheapskateApiService', () => {
  let service: CheapskateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheapskateApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
