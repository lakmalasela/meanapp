import { TestBed } from '@angular/core/testing';

import { GRNserviceService } from './grnservice.service';

describe('GRNserviceService', () => {
  let service: GRNserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GRNserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
