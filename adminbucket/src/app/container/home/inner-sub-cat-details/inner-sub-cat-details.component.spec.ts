import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { InnerSubCatDetailsComponent } from './inner-sub-cat-details.component';

describe('InnerSubCatDetailsComponent', () => {
  let component: InnerSubCatDetailsComponent;
  let fixture: ComponentFixture<InnerSubCatDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, RouterTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ InnerSubCatDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerSubCatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

