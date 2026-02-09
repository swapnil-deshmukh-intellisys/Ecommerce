import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const authSpy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
    const routeSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authSpy },
        { provide: Router, useValue: routeSpy }
      ]
    });

    guard = TestBed.get(AuthGuard);
    authServiceSpy = TestBed.get(AuthService) as jasmine.SpyObj<AuthService>;
    routerSpy = TestBed.get(Router) as jasmine.SpyObj<Router>;
  });

  // F2P Test: This test will fail initially, then pass after implementation
  describe('canActivate', () => {
    it('should allow access when user is authenticated', () => {
      authServiceSpy.isAuthenticated.and.returnValue(true);

      const result = guard.canActivate({} as any, {} as any);

      expect(result).toBe(true);
      expect(authServiceSpy.isAuthenticated).toHaveBeenCalled();
      expect(routerSpy.navigate).not.toHaveBeenCalled();
    });

    it('should deny access and redirect when user is not authenticated', () => {
      authServiceSpy.isAuthenticated.and.returnValue(false);

      const result = guard.canActivate({} as any, {} as any);

      expect(result).toBe(false);
      expect(authServiceSpy.isAuthenticated).toHaveBeenCalled();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/login'], { queryParams: { returnUrl: undefined } });
    });
  });

  // P2P Test: Basic guard instantiation
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
