/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PorfolioCardComponent } from './porfolio-card.component';

describe('PorfolioCardComponent', () => {
  let component: PorfolioCardComponent;
  let fixture: ComponentFixture<PorfolioCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorfolioCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorfolioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
