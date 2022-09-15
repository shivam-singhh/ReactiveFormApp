import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestFormPresentationComponent } from './interest-form-presentation.component';

describe('InterestFormPresentationComponent', () => {
  let component: InterestFormPresentationComponent;
  let fixture: ComponentFixture<InterestFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
