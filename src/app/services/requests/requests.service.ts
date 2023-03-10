import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Buy,
  BuyDB,
  Product,
  ProductDB,
  ProductEdit,
} from '../../models/Inventory';
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

  getAllBuys(inventoryID: string): Observable<Array<BuyDB>> {
    return this.http.get<Array<BuyDB>>(
      `${environment.API_URL}buys?inventoryID=${inventoryID}`
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

  addProduct(product: Product) {
    return this.http.post<Product>(`${environment.API_URL}product`, product);
  }

  updateProduct(product: ProductEdit) {
    return this.http.put(`${environment.API_URL}product`, product);
  }

  buyProducts(buy: Buy) {
    return this.http.post(`${environment.API_URL}buy`, buy);
  }
}
