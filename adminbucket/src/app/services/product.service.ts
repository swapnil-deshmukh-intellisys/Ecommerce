import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  category?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API_URL = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL).pipe(
      catchError(error => {
        console.error('Failed to fetch products:', error);
        return of([]); // Return empty array on error
      })
    );
  }

  getProductById(id: number): Observable<Product | null> {
    return this.http.get<Product>(`${this.API_URL}/${id}`).pipe(
      catchError(error => {
        console.error(`Failed to fetch product ${id}:`, error);
        return of(null);
      })
    );
  }

  createProduct(product: Omit<Product, 'id'>): Observable<Product> {
    return this.http.post<Product>(this.API_URL, product).pipe(
      catchError(error => {
        console.error('Failed to create product:', error);
        throw error;
      })
    );
  }

  updateProduct(id: number, product: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${this.API_URL}/${id}`, product).pipe(
      catchError(error => {
        console.error(`Failed to update product ${id}:`, error);
        throw error;
      })
    );
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`).pipe(
      catchError(error => {
        console.error(`Failed to delete product ${id}:`, error);
        throw error;
      })
    );
  }
}
