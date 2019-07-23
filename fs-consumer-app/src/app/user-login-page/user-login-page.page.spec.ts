import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginPagePage } from './user-login-page.page';

describe('UserLoginPagePage', () => {
  let component: UserLoginPagePage;
  let fixture: ComponentFixture<UserLoginPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
