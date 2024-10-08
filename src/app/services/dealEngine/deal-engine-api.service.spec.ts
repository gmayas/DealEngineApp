import { TestBed } from '@angular/core/testing';

import { DealEngineApiService } from './deal-engine-api.service';

describe('DealEngineApiService', () => {
  let service: DealEngineApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealEngineApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
