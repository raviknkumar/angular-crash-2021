import { TestBed } from '@angular/core/testing';

import { MynewoneService } from './mynewone.service';

describe('MynewoneService', () => {
  let service: MynewoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MynewoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
