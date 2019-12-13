import { TestBed } from '@angular/core/testing';

import { ActivityloggingService } from './activitylogging.service';

describe('ActivityloggingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityloggingService = TestBed.get(ActivityloggingService);
    expect(service).toBeTruthy();
  });
});
