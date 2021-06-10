import { TestBed } from '@angular/core/testing';

import { EnregPostesService } from './enreg-postes.service';

describe('EnregPostesService', () => {
  let service: EnregPostesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnregPostesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
