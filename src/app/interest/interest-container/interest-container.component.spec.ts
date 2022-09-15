import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestContainerComponent } from './interest-container.component';

describe('InterestContainerComponent', () => {
  let component: InterestContainerComponent;
  let fixture: ComponentFixture<InterestContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
