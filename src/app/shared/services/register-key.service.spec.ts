import { TestBed } from '@angular/core/testing';

import { RegisterKeyService } from './register-key.service';

describe('RegisterKeyService', () => {
  let service: RegisterKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
