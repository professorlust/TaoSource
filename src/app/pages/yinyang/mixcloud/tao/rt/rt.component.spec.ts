/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RtComponent } from './rt.component';

describe('RtComponent', () => {
  let component: RtComponent;
  let fixture: ComponentFixture<RtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
