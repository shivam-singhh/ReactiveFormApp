import { TestBed } from '@angular/core/testing';

import { InterestFormPresenterService } from './interest-form-presenter.service';

describe('InterestFormPresenterService', () => {
  let service: InterestFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
