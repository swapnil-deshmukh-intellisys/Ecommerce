import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // F2P Test: This test will fail initially, then pass after implementation
  describe('login', () => {
    it('should return user data on successful login', () => {
      const mockCredentials = { username: 'test@example.com', password: 'password123' };
      const mockResponse = { token: 'mock-token', user: { id: 1, email: 'test@example.com' } };

      service.login(mockCredentials).subscribe(response => {
        expect(response.token).toBe('mock-token');
        expect(response.user.email).toBe('test@example.com');
      });

      const req = httpMock.expectOne('http://localhost:3000/api/auth/login');
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);
    });

    it('should handle login failure', () => {
      const mockCredentials = { username: 'wrong@example.com', password: 'wrongpassword' };

      service.login(mockCredentials).subscribe(
        () => fail('should have failed with 401 error'),
        error => {
          expect(error.status).toBe(401);
        }
      );

      const req = httpMock.expectOne('http://localhost:3000/api/auth/login');
      req.flush('Unauthorized', { status: 401, statusText: 'Unauthorized' });
    });
  });

  // P2P Test: This should pass both before and after changes
  describe('logout', () => {
    it('should clear user session', () => {
      spyOn(localStorage, 'removeItem');
      service.logout();
      expect(localStorage.removeItem).toHaveBeenCalledWith('authToken');
      expect(localStorage.removeItem).toHaveBeenCalledWith('user');
    });
  });
});
