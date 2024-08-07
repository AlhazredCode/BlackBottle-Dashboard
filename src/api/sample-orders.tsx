import productsData from "./sample-products";
import vendorsData from "./sample-vendors";
import { Order } from "types/orders";

const ordersData: Order[] = [
  {
    id: 'ORD001',
    vendorId: vendorsData[0].id, // Sunshine State Beverages
    products: [
      { productId: productsData[0].SKU, quantity: 5 }, // Craft IPA Beer x 5
      { productId: productsData[2].SKU, quantity: 2 }, // Lager Beer x 2
    ],
    status: 'Pending',
    total: 48.50,
    date: '2023-12-18'
  },
  {
    id: 'ORD002',
    vendorId: vendorsData[1].id, // Coastal Drinks Distributor
    products: [
      { productId: productsData[1].SKU, quantity: 10 }, // Pilsner Beer x 10
      { productId: productsData[3].SKU, quantity: 3 }, // Stout Beer x 3
    ],
    status: 'Completed',
    total: 92.00,
    date: '2023-12-15'
  },
  {
    id: 'ORD003',
    vendorId: vendorsData[0].id, // Sunshine State Beverages
    products: [
      { productId: productsData[4].SKU, quantity: 8 }, // Wheat Beer x 8 
    ],
    status: 'Cancelled',
    total: 52.00,
    date: '2023-12-12'
  },
  {
    id: 'ORD004',
    vendorId: vendorsData[2].id, // Citywide Beverage Supply
    products: [
      { productId: productsData[5].SKU, quantity: 12 }, // Pale Ale Beer x 12
      { productId: productsData[1].SKU, quantity: 6 },  // Pilsner Beer x 6
    ],
    status: 'Pending',
    total: 114.00,
    date: '2023-12-19'
  },
  {
    id: 'ORD005',
    vendorId: vendorsData[1].id, // Coastal Drinks Distributor
    products: [
      { productId: productsData[3].SKU, quantity: 9 }, // Stout Beer x 9
      { productId: productsData[0].SKU, quantity: 4 }, // Craft IPA Beer x 4 
    ],
    status: 'Completed',
    total: 87.00,
    date: '2023-12-16'
  },
  {
    id: 'ORD006',
    vendorId: vendorsData[0].id, // Sunshine State Beverages
    products: [
      { productId: productsData[2].SKU, quantity: 7 }, // Lager Beer x 7
      { productId: productsData[5].SKU, quantity: 3 }, // Pale Ale Beer x 3
    ],
    status: 'Pending',
    total: 64.50,
    date: '2023-12-20'
  },
  {
    id: 'ORD007',
    vendorId: vendorsData[2].id, // Citywide Beverage Supply
    products: [
      { productId: productsData[1].SKU, quantity: 15 }, // Pilsner Beer x 15
    ],
    status: 'Completed',
    total: 82.50,
    date: '2023-12-17'
  },
  {
    id: 'ORD008',
    vendorId: vendorsData[1].id, // Coastal Drinks Distributor
    products: [
      { productId: productsData[4].SKU, quantity: 4 }, // Wheat Beer x 4
      { productId: productsData[0].SKU, quantity: 6 }, // Craft IPA Beer x 6
      { productId: productsData[3].SKU, quantity: 2 }, // Stout Beer x 2 
    ],
    status: 'Pending',
    total: 90.00,
    date: '2023-12-21'
  },
  {
    id: 'ORD009',
    vendorId: vendorsData[0].id, // Sunshine State Beverages 
    products: [
      { productId: productsData[5].SKU, quantity: 10 }, // Pale Ale Beer x 10
    ],
    status: 'Completed',
    total: 75.00,
    date: '2023-12-18'
  },
  {
    id: 'ORD010',
    vendorId: vendorsData[2].id, // Citywide Beverage Supply
    products: [
      { productId: productsData[2].SKU, quantity: 3 }, // Lager Beer x 3
      { productId: productsData[4].SKU, quantity: 5 }, // Wheat Beer x 5 
      { productId: productsData[1].SKU, quantity: 8 }, // Pilsner Beer x 8
    ],
    status: 'Pending',
    total: 101.50,
    date: '2023-12-22'
  }
];

export default ordersData;