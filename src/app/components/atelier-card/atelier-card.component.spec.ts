/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AtelierCardComponent } from './atelier-card.component';

describe('AtelierCardComponent', () => {
  let component: AtelierCardComponent;
  let fixture: ComponentFixture<AtelierCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtelierCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtelierCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
