import { TestBed } from '@angular/core/testing';

import { ApipromiseService } from './apipromise.service';

describe('ApipromiseService', () => {
  let service: ApipromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
