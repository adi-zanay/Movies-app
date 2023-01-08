import { TestBed } from '@angular/core/testing';

import { MovserviceService } from './movservice.service';

describe('MovserviceService', () => {
  let service: MovserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
