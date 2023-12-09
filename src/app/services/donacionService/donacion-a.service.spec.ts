import { TestBed } from '@angular/core/testing';

import { DonacionAService } from './donacion-a.service';

describe('DonacionAService', () => {
  let service: DonacionAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonacionAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
