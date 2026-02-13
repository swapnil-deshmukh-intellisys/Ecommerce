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

import { SliderlistComponent } from './sliderlist.component';

describe('SliderlistComponent', () => {
  let component: SliderlistComponent;
  let fixture: ComponentFixture<SliderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, ReactiveFormsModule, RouterTestingModule, DropdownModule, InputTextModule, ButtonModule, GrowlModule ],
      providers: [ HTTPService, ConfirmationService ],
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ SliderlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





