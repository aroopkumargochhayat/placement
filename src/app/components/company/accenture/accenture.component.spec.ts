import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccentureComponent } from './accenture.component';

describe('AccentureComponent', () => {
  let component: AccentureComponent;
  let fixture: ComponentFixture<AccentureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccentureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccentureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
