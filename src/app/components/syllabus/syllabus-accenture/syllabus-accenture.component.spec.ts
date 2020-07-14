import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusAccentureComponent } from './syllabus-accenture.component';

describe('SyllabusAccentureComponent', () => {
  let component: SyllabusAccentureComponent;
  let fixture: ComponentFixture<SyllabusAccentureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusAccentureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusAccentureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
