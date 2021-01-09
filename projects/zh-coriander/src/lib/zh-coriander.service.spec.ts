import { TestBed } from '@angular/core/testing';

import { ZhCorianderService } from './zh-coriander.service';

describe('ZhCorianderService', () => {
  let service: ZhCorianderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZhCorianderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
