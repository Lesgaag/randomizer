import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibilitiesPageComponent } from './possibilities-page.component';

describe('PossibilitiesPageComponent', () => {
  let component: PossibilitiesPageComponent;
  let fixture: ComponentFixture<PossibilitiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossibilitiesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibilitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
