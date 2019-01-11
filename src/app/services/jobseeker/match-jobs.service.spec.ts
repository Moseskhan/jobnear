import { TestBed } from '@angular/core/testing';

import { MatchJobsService } from './match-jobs.service';

describe('MatchJobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchJobsService = TestBed.get(MatchJobsService);
    expect(service).toBeTruthy();
  });
});
