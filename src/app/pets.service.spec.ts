import { TestBed } from '@angular/core/testing';

import { PetsService } from './pets.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

describe('PetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      
    ],
    declarations: [
      
    ],
    providers: [
      HttpClient
    ]
  }));

  it('should be created', () => {
    const service: PetsService = TestBed.get(PetsService);
    expect(service).toBeTruthy();
  });
});
