import { TestBed } from '@angular/core/testing';

import { FrenlisService } from './frenlis.service';

describe('FrenlisService', () => {
  let service: FrenlisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrenlisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
