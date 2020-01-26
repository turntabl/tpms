import { TestBed } from '@angular/core/testing';

import { ProjectloggingService } from './projectlogging.service';

describe('ProjectloggingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectloggingService = TestBed.get(ProjectloggingService);
    expect(service).toBeTruthy();
  });
});
