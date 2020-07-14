import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusInfosysComponent } from './syllabus-infosys.component';

describe('SyllabusInfosysComponent', () => {
  let component: SyllabusInfosysComponent;
  let fixture: ComponentFixture<SyllabusInfosysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusInfosysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusInfosysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
