import { TestBed } from '@angular/core/testing';

import { EmployeeProfileService } from './employee-profile.service';

describe('EmployeeProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeProfileService = TestBed.get(EmployeeProfileService);
    expect(service).toBeTruthy();
  });
});
