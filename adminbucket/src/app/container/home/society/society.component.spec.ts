import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HTTPService } from '../../../app.service';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { GrowlModule } from 'primeng/growl';

import { SocietyComponent } from './society.component';

describe('SocietyComponent', () => {
  let component: SocietyComponent;
  let fixture: ComponentFixture<SocietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpModule, RouterTestingModule, DropdownModule, InputTextModule, ButtonModule, GrowlModule ],
      providers: [ HTTPService ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
