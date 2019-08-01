import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnWhyPage } from './learn-why.page';

describe('LearnWhyPage', () => {
  let component: LearnWhyPage;
  let fixture: ComponentFixture<LearnWhyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnWhyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnWhyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
