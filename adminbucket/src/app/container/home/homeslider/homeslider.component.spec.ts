import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HTTPService } from '../../../app.service';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { GrowlModule } from 'primeng/growl';
import { CalendarModule } from 'primeng/calendar';

import { HomesliderComponent } from './homeslider.component';

describe('HomesliderComponent', () => {
  let component: HomesliderComponent;
  let fixture: ComponentFixture<HomesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesliderComponent ],
      imports: [ HttpModule, ReactiveFormsModule, RouterTestingModule, DropdownModule, InputTextModule, ButtonModule, GrowlModule, CalendarModule ],
      providers: [ HTTPService ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
