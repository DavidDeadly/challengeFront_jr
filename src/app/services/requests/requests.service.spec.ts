import { RequestsService } from './requests.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import {
  Buy,
  BuyDB,
  Product,
  ProductDB,
  ProductEdit,
} from 'src/app/models/Inventory';

describe('RequestsService', () => {
  let service: RequestsService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'put',
      'delete',
      'post',
    ]);

    service = new RequestsService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return exepected products (HttpClient called once)', (done: DoneFn) => {
    const exepectedProducts: Array<ProductDB> = [
      {
        id: '1',
        name: 'pc',
        inInventory: 200,
        enabled: true,
        min: 8,
        max: 10,
      },
      {
        id: '2',
        name: 'laptop',
        inInventory: 50,
        enabled: true,
        min: 1,
        max: 5,
      },
    ];

    httpClientSpy.get.and.returnValue(of(exepectedProducts));

    service.getAllProducts('1').subscribe({
      next: products => {
        expect(products)
          .withContext('expected products')
          .toEqual(exepectedProducts);

        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should return expected buys (HttpClient called once)', (done: DoneFn) => {
    const exepectedBuys: Array<BuyDB> = [
      {
        buyId: '1',
        clientName: 'David',
        clientId: '100',
        date: '21 July 2010',
        idType: 'CC',
        products: [
          {
            productId: '1',
            quantity: 1,
          },
        ],
      },
      {
        buyId: '2',
        clientName: 'Isabel',
        clientId: '102',
        date: '21 July 2010',
        idType: 'CC',
        products: [
          {
            productId: '1',
            quantity: 1,
          },
        ],
      },
    ];

    httpClientSpy.get.and.returnValue(of(exepectedBuys));

    service.getAllBuys('1').subscribe({
      next: buys => {
        expect(buys).withContext('expected products').toEqual(exepectedBuys);

        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should delete the product (HttpClient called once)', (done: DoneFn) => {
    const productToDelete = '1';

    httpClientSpy.delete.and.returnValue(of(undefined));

    service.deleteProduct('1', productToDelete).subscribe({
      next: done,
      error: done.fail,
    });

    expect(httpClientSpy.delete.calls.count()).withContext('one call').toBe(1);
  });

  it('should add the product (HttpClient called once)', (done: DoneFn) => {
    const productToAdd: Product = {
      name: 'Pc',
      inInventory: 500,
      enabled: true,
      min: 1,
      max: 20,
    };

    httpClientSpy.post.and.returnValue(of(productToAdd));

    service.addProduct(productToAdd).subscribe({
      next: productdAdded => {
        expect(productdAdded)
          .withContext('product to add')
          .toEqual(productToAdd);

        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.post.calls.count()).withContext('one call').toBe(1);
  });

  it('should update the product (HttpClient called once)', (done: DoneFn) => {
    const productEdit: ProductEdit = {
      inventoryID: '1',
      productID: '1',
      name: 'PC',
    };

    httpClientSpy.put.and.returnValue(of(undefined));

    service.updateProduct(productEdit).subscribe({
      next: done,
      error: done.fail,
    });

    expect(httpClientSpy.put.calls.count()).withContext('one call').toBe(1);
  });

  it('should buy the products (HttpClient called once)', (done: DoneFn) => {
    const buy: Buy = {
      inventoryID: '1',
      clientName: 'David',
      idClient: '100',
      idType: 'CC',
      productsBuy: [
        {
          productId: '1',
          quantity: 1,
        },
      ],
    };

    httpClientSpy.post.and.returnValue(of(buy));

    service.buyProducts(buy).subscribe({
      next: buyProccesed => {
        expect(buyProccesed).withContext('buy').toEqual(buy);

        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.post.calls.count()).withContext('one call').toBe(1);
  });
});
