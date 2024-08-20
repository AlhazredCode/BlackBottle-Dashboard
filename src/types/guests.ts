// types/guests.ts

export interface Guest {
    id: number;
    name: string;
    email: string;
    phone: string;
    last_visit: string;
    total_visits: number;
    total_spend: number;
    guest_orders: Order[];
  }
  
  export interface Order {
    order_id: number;
    order_date: string;
    total_amount: number;
    items: Item[];
  }
  
  export interface Item {
    item_name: string;
    quantity: number;
    price: number;
  }