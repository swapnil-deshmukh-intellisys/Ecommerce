import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingSpinnerComponent } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // F2P Test: This test will fail initially, then pass after implementation
  describe('loading state', () => {
    it('should show spinner when loading is true', () => {
      component.isLoading = true;
      fixture.detectChanges();

      const spinnerElement = fixture.nativeElement.querySelector('.loading-spinner');
      expect(spinnerElement).toBeTruthy();
      expect(spinnerElement.style.display).not.toBe('none');
    });

    it('should hide spinner when loading is false', () => {
      component.isLoading = false;
      fixture.detectChanges();

      const spinnerElement = fixture.nativeElement.querySelector('.loading-spinner');
      expect(spinnerElement.style.display).toBe('none');
    });
  });

  // P2P Test: Basic rendering test
  it('should have default loading state as false', () => {
    expect(component.isLoading).toBe(false);
  });
});
