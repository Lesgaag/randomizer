import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibilityOriginsComponent } from './possibility-origins.component';

describe('PossibilityOriginsComponent', () => {
  let component: PossibilityOriginsComponent;
  let fixture: ComponentFixture<PossibilityOriginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossibilityOriginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibilityOriginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
