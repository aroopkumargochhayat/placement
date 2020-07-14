import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosysComponent } from './infosys.component';

describe('InfosysComponent', () => {
  let component: InfosysComponent;
  let fixture: ComponentFixture<InfosysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
