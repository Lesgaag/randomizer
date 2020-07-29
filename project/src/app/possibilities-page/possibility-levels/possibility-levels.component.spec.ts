import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibilityLevelsComponent } from './possibility-levels.component';

describe('PossibilityLevelsComponent', () => {
  let component: PossibilityLevelsComponent;
  let fixture: ComponentFixture<PossibilityLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossibilityLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibilityLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
