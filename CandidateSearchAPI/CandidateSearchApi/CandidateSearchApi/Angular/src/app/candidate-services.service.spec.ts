import { TestBed } from '@angular/core/testing';

import { CandidateServicesService } from './candidate-services.service';

describe('CandidateServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateServicesService = TestBed.get(CandidateServicesService);
    expect(service).toBeTruthy();
  });
});
