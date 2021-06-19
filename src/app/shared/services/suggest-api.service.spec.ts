import { TestBed } from '@angular/core/testing';

import { SuggestAPIService } from './suggest-api.service';

describe('SuggestAPIService', () => {
  let service: SuggestAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuggestAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
