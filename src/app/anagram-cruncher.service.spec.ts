import { TestBed } from '@angular/core/testing';

import { AnagramCruncherService } from './anagram-cruncher.service';

describe('AnagramCruncherService', () => {
  let service: AnagramCruncherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnagramCruncherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
