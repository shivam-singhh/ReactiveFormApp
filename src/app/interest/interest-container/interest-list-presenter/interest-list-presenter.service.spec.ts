import { TestBed } from '@angular/core/testing';

import { InterestListPresenterService } from './interest-list-presenter.service';

describe('InterestListPresenterService', () => {
  let service: InterestListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
