import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HTTPService } from '../../../app.service';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { GrowlModule } from 'primeng/growl';
import { CalendarModule } from 'primeng/calendar';

import { UpdatesliderComponent } from './updateslider.component';

describe('UpdatesliderComponent', () => {
  let component: UpdatesliderComponent;
  let fixture: ComponentFixture<UpdatesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesliderComponent ],
      imports: [
        ReactiveFormsModule,
        HttpModule,
        RouterTestingModule,
        DropdownModule,
        InputTextModule,
        ButtonModule,
        GrowlModule,
        CalendarModule
      ],
      providers: [ HTTPService, FormBuilder ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesliderComponent);
    component = fixture.componentInstance;

    // Initialize the form group that the template expects
    const fb = TestBed.get(FormBuilder);
    component.editForm = fb.group({
      bannerName: [''],
      bannerDiscription: [''],
      brand: ['']
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
