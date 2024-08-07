export interface Order {
    id: string;
    vendorId: string; 
    products: { productId: string, quantity: number }[]; 
    status: string;
    total: number;
    date: string;
  }