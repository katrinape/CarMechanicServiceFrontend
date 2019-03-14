import { TestBed } from '@angular/core/testing';

import { RepairService } from './repair.service';

describe('RepairService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepairService = TestBed.get(RepairService);
    expect(service).toBeTruthy();
  });
});
