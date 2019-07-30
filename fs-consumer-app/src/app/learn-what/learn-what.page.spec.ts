import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnWhatPage } from './learn-what.page';

describe('LearnWhatPage', () => {
  let component: LearnWhatPage;
  let fixture: ComponentFixture<LearnWhatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnWhatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnWhatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
