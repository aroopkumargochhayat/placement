import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusWiproComponent } from './syllabus-wipro.component';

describe('SyllabusWiproComponent', () => {
  let component: SyllabusWiproComponent;
  let fixture: ComponentFixture<SyllabusWiproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusWiproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusWiproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
