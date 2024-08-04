export interface Receipt {
    Name: string;
    Image: string;
    Description: string;
    Category: string;
    inventory: {
      TotalQty: number;
    };
    ingredients: {
      name: string;
      quantity: string;
    }[];
    instructions: string;
  }