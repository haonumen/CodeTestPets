import { TestBed } from '@angular/core/testing';

import { PetsService } from './pets.service';

describe('PetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetsService = TestBed.get(PetsService);
    expect(service).toBeTruthy();
  });
});
