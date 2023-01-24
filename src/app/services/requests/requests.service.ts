import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDB } from '../../models/Inventory';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  getAllProducts(inventoryID: string): Observable<Array<ProductDB>> {
    return this.http.get<Array<ProductDB>>(
      `${environment.API_URL}products?inventoryID=${inventoryID}`
    );
  }

  deleteProduct(inventoryID: string, productID: string) {
    const deleteCom = {
      inventoryID,
      productID,
    };

    return this.http.delete(`${environment.API_URL}product`, {
      body: deleteCom,
    });
  }

  addProduct(product: ProductDB) {
    return this.http.post<ProductDB>(`${environment.API_URL}product`, product);
  }
}
