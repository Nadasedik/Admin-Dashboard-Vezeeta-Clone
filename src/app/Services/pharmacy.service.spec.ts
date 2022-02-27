/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PharmacyService } from './pharmacy.service';

describe('Service: Pharmacy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PharmacyService]
    });
  });

  it('should ...', inject([PharmacyService], (service: PharmacyService) => {
    expect(service).toBeTruthy();
  }));
});
