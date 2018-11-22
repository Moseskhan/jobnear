import { TestBed } from '@angular/core/testing';

import { IndustryCategoriesService } from './industry-categories.service';

describe('IndustryCategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndustryCategoriesService = TestBed.get(IndustryCategoriesService);
    expect(service).toBeTruthy();
  });
});
