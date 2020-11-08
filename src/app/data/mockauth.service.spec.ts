import { TestBed } from '@angular/core/testing';

import { MockauthService } from './mockauth.service';

describe('MockauthService', () => {
  let service: MockauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
