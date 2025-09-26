import { TestBed } from '@angular/core/testing';

import { LikebuttonsService } from './likebuttons.service';

describe('LikebuttonsService', () => {
  let service: LikebuttonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikebuttonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
