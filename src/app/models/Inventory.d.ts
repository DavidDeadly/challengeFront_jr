export interface Product {
  name: string;
  inInventory: number;
  enabled: boolean;
  min: number;
  max: number;
}

export interface ProductDB extends Product {
  id: string;
}

export interface ProductEdit {
  inventoryID: string;
  productID: string;
  name?: string;
  inInventory?: number;
  min?: number;
  max?: number;
}

export interface ProductBuy {
  productId: string;
  quantity: number;
}

export interface Buy {
  inventoryID: string;
  clientName: string;
  idType: string;
  idClient: string;
  productsBuy: Array<ProductBuy>;
}

export interface BuyDB {
  buyId: string;
  date: string;
  clientId: string;
  idType: string;
  clientName: string;
  products: Array<ProductBuy>;
}
