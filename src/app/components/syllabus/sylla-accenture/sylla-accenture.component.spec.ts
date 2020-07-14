import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllaAccentureComponent } from './sylla-accenture.component';

describe('SyllaAccentureComponent', () => {
  let component: SyllaAccentureComponent;
  let fixture: ComponentFixture<SyllaAccentureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllaAccentureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllaAccentureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
