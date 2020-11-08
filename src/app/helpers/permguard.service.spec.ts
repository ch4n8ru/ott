import { TestBed } from '@angular/core/testing';

import { PermguardService } from './permguard.service';

describe('PermguardService', () => {
  let service: PermguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
