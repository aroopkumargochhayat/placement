import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusTcsComponent } from './syllabus-tcs.component';

describe('SyllabusTcsComponent', () => {
  let component: SyllabusTcsComponent;
  let fixture: ComponentFixture<SyllabusTcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusTcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusTcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
