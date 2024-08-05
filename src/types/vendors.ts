export interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  }
  
  export interface ProductOffered {
    SKU: string;
  }
  
  export interface Vendor {
    id: string;
    companyName: string;
    contactName: string;
    phoneNumber: string;
    email: string;
    address: Address;
    productsOffered: ProductOffered[];
    paymentTerms: string;
    notes: string;
  }