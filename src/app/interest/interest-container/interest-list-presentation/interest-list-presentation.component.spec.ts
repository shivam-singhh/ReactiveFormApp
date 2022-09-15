import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestListPresentationComponent } from './interest-list-presentation.component';

describe('InterestListPresentationComponent', () => {
  let component: InterestListPresentationComponent;
  let fixture: ComponentFixture<InterestListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
