import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderlistComponent } from './sliderlist.component';

describe('SliderlistComponent', () => {
  let component: SliderlistComponent;
  let fixture: ComponentFixture<SliderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
