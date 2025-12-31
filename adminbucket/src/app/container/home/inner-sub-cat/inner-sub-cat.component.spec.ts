import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSubCatComponent } from './inner-sub-cat.component';

describe('InnerSubCatComponent', () => {
  let component: InnerSubCatComponent;
  let fixture: ComponentFixture<InnerSubCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerSubCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerSubCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
