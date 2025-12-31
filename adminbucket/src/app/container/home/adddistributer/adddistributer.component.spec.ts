import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddistributerComponent } from './adddistributer.component';

describe('AdddistributerComponent', () => {
  let component: AdddistributerComponent;
  let fixture: ComponentFixture<AdddistributerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
