import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // F2P Test: This test will fail initially, then pass after implementation
  describe('getProducts', () => {
    it('should return array of products', () => {
      const mockProducts = [
        { id: 1, name: 'Product 1', price: 99.99 },
        { id: 2, name: 'Product 2', price: 149.99 }
      ];

      service.getProducts().subscribe(products => {
        expect(products.length).toBe(2);
        expect(products[0].name).toBe('Product 1');
      });

      const req = httpMock.expectOne('http://localhost:3000/api/products');
      expect(req.request.method).toBe('GET');
      req.flush(mockProducts);
    });

    it('should handle empty product list', () => {
      service.getProducts().subscribe(products => {
        expect(products.length).toBe(0);
      });

      const req = httpMock.expectOne('http://localhost:3000/api/products');
      req.flush([]);
    });
  });

  // P2P Test: Basic functionality test
  describe('getProductById', () => {
    it('should return single product by ID', () => {
      const mockProduct = { id: 1, name: 'Test Product', price: 99.99 };

      service.getProductById(1).subscribe(product => {
        expect(product.id).toBe(1);
        expect(product.name).toBe('Test Product');
      });

      const req = httpMock.expectOne('http://localhost:3000/api/products/1');
      expect(req.request.method).toBe('GET');
      req.flush(mockProduct);
    });
  });
});
