import { TestBed } from '@angular/core/testing';

import { AssignprojectService } from './assignproject.service';

describe('AssignprojectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignprojectService = TestBed.get(AssignprojectService);
    expect(service).toBeTruthy();
  });
});
