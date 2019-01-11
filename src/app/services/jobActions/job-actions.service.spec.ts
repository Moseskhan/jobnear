import { TestBed } from '@angular/core/testing';

import { JobActionsService } from './job-actions.service';

describe('JobActionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobActionsService = TestBed.get(JobActionsService);
    expect(service).toBeTruthy();
  });
});
