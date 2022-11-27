import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPeriodDetailsEditorComponent } from './teaching-period-details-editor.component';

describe('TeachingPeriodDetailsEditorComponent', () => {
  let component: TeachingPeriodDetailsEditorComponent;
  let fixture: ComponentFixture<TeachingPeriodDetailsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingPeriodDetailsEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingPeriodDetailsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
