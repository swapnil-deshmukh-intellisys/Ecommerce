import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSubCatDetailsComponent } from './inner-sub-cat-details.component';

describe('InnerSubCatDetailsComponent', () => {
  let component: InnerSubCatDetailsComponent;
  let fixture: ComponentFixture<InnerSubCatDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
