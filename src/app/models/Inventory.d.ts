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
