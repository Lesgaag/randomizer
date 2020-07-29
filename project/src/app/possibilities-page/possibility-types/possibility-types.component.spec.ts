import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibilityTypesComponent } from './possibility-types.component';

describe('PossibilityTypesComponent', () => {
  let component: PossibilityTypesComponent;
  let fixture: ComponentFixture<PossibilityTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossibilityTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibilityTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
