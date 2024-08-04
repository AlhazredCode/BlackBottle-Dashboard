export interface Product {
    Name: string;
    Brand: string;
    Image: string;
    Description: string;
    Price: number;
    PurchaseCost: number;
    Casesize: number;
    Par: number;
    UPC: string;
    SKU: string;
    Taste: string;
    Provider: string;
    Status: boolean;
    Category: string;
    inventory: {
      TotalQty: number;
      TotalCases: number;
      CaseSize: number;
      bars: {
        [key: string]: { // Permite cualquier nombre de bar
          [key: string]: number; // Permite cualquier nombre de propiedad dentro del bar
        };
      };
    };
  }