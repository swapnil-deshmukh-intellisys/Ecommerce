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
import { ConfirmationService } from 'primeng/api';

import { AdddistributerComponent } from './adddistributer.component';

describe('AdddistributerComponent', () => {
  let component: AdddistributerComponent;
  let fixture: ComponentFixture<AdddistributerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, ReactiveFormsModule, RouterTestingModule, DropdownModule, InputTextModule, ButtonModule, GrowlModule ],
      providers: [ HTTPService, ConfirmationService ],
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ AdddistributerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddistributerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





