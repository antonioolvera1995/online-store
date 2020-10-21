import { TestBed } from '@angular/core/testing';

import { ProducstlistingService } from './producstlisting.service';

describe('ProducstlistingService', () => {
  let service: ProducstlistingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducstlistingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
