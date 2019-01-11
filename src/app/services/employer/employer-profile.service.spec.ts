import { TestBed } from '@angular/core/testing';

import { EmployerProfileService } from './employer-profile.service';

describe('EmployerProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployerProfileService = TestBed.get(EmployerProfileService);
    expect(service).toBeTruthy();
  });
});
