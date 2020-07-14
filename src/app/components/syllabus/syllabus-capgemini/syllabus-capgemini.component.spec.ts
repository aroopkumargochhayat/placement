import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusCapgeminiComponent } from './syllabus-capgemini.component';

describe('SyllabusCapgeminiComponent', () => {
  let component: SyllabusCapgeminiComponent;
  let fixture: ComponentFixture<SyllabusCapgeminiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusCapgeminiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusCapgeminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
