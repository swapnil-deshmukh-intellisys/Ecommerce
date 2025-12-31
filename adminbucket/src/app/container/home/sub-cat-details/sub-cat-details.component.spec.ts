import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatDetailsComponent } from './sub-cat-details.component';

describe('SubCatDetailsComponent', () => {
  let component: SubCatDetailsComponent;
  let fixture: ComponentFixture<SubCatDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCatDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
