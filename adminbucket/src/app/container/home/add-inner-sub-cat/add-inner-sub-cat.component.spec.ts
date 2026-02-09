import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { GrowlModule } from 'primeng/growl';
import { HTTPService } from '../../../app.service';

import { AddInnerSubCatComponent } from './add-inner-sub-cat.component';

describe('AddInnerSubCatComponent', () => {
  let component: AddInnerSubCatComponent;
  let fixture: ComponentFixture<AddInnerSubCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, ReactiveFormsModule, RouterTestingModule, DropdownModule, InputTextModule, ButtonModule, GrowlModule ],
      providers: [ HTTPService ],
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ AddInnerSubCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInnerSubCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




