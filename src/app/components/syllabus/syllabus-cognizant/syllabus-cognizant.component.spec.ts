import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusCognizantComponent } from './syllabus-cognizant.component';

describe('SyllabusCognizantComponent', () => {
  let component: SyllabusCognizantComponent;
  let fixture: ComponentFixture<SyllabusCognizantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusCognizantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusCognizantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
