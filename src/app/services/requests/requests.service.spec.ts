import { RequestsService } from './requests.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ProductDB } from 'src/app/models/Inventory';

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
});
