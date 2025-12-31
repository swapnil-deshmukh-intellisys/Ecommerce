import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInnerSubCatComponent } from './add-inner-sub-cat.component';

describe('AddInnerSubCatComponent', () => {
  let component: AddInnerSubCatComponent;
  let fixture: ComponentFixture<AddInnerSubCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
