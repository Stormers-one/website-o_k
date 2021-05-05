import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateNewScheduleComponent } from './generate-new-schedule.component';

describe('GenerateNewScheduleComponent', () => {
  let component: GenerateNewScheduleComponent;
  let fixture: ComponentFixture<GenerateNewScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateNewScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateNewScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
