import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FareUpdateComponent } from './fare-update.component';

describe('FareUpdateComponent', () => {
  let component: FareUpdateComponent;
  let fixture: ComponentFixture<FareUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FareUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FareUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
