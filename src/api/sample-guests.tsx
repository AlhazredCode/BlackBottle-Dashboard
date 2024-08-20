import { Guest } from "types/guests";

const guestsData: Guest[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
    last_visit: "2023-10-26",
    total_visits: 15,
    total_spend: 350.00,
    guest_orders: [
      {
        order_id: 1,
        order_date: "2023-10-26",
        total_amount: 55.00,
        items: [
          { item_name: "Margherita Pizza", quantity: 1, price: 25.00 },
          { item_name: "Soda", quantity: 2, price: 15.00 },
        ],
      },
      {
        order_id: 2,
        order_date: "2023-10-20",
        total_amount: 45.00,
        items: [
          { item_name: "Chicken Wings", quantity: 1, price: 20.00 },
          { item_name: "Beer", quantity: 2, price: 25.00 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "555-987-6543",
    last_visit: "2023-10-25",
    total_visits: 8,
    total_spend: 200.00,
    guest_orders: [
      {
        order_id: 3,
        order_date: "2023-10-25",
        total_amount: 30.00,
        items: [
          { item_name: "Caesar Salad", quantity: 1, price: 15.00 },
          { item_name: "Wine", quantity: 1, price: 15.00 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "David Lee",
    email: "david.lee@example.com",
    phone: "555-111-2222",
    last_visit: "2023-10-22",
    total_visits: 22,
    total_spend: 500.00,
    guest_orders: [
      {
        order_id: 4,
        order_date: "2023-10-22",
        total_amount: 70.00,
        items: [
          { item_name: "Steak", quantity: 1, price: 50.00 },
          { item_name: "Cocktail", quantity: 2, price: 20.00 },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Sarah Jones",
    email: "sarah.jones@example.com",
    phone: "555-333-4444",
    last_visit: "2023-10-18",
    total_visits: 12,
    total_spend: 300.00,
    guest_orders: [
      {
        order_id: 5,
        order_date: "2023-10-18",
        total_amount: 40.00,
        items: [
          { item_name: "Pasta Carbonara", quantity: 1, price: 25.00 },
          { item_name: "Soda", quantity: 1, price: 15.00 },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "555-555-6666",
    last_visit: "2023-10-15",
    total_visits: 5,
    total_spend: 100.00,
    guest_orders: [
      {
        order_id: 6,
        order_date: "2023-10-15",
        total_amount: 20.00,
        items: [
          { item_name: "Burger", quantity: 1, price: 20.00 },
        ],
      },
    ],
  },

  {
    id: 6,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "555-777-8888",
    last_visit: "2023-10-10",
    total_visits: 3,
    total_spend: 60.00,
    guest_orders: [
      {
        order_id: 7,
        order_date: "2023-10-10",
        total_amount: 60.00,
        items: [
          { item_name: "Sushi Platter", quantity: 1, price: 60.00 },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Daniel Wilson",
    email: "daniel.wilson@example.com",
    phone: "555-999-0000",
    last_visit: "2023-10-05",
    total_visits: 10,
    total_spend: 250.00,
    guest_orders: [
      {
        order_id: 8,
        order_date: "2023-10-05",
        total_amount: 50.00,
        items: [
          { item_name: "Tacos", quantity: 2, price: 25.00 },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Ashley Rodriguez",
    email: "ashley.rodriguez@example.com",
    phone: "555-123-4568",
    last_visit: "2023-10-01",
    total_visits: 18,
    total_spend: 400.00,
    guest_orders: [
      {
        order_id: 9,
        order_date: "2023-10-01",
        total_amount: 80.00,
        items: [
          { item_name: "Seafood Paella", quantity: 1, price: 80.00 },
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Kevin Garcia",
    email: "kevin.garcia@example.com",
    phone: "555-987-6544",
    last_visit: "2023-09-25",
    total_visits: 7,
    total_spend: 150.00,
    guest_orders: [
      {
        order_id: 10,
        order_date: "2023-09-25",
        total_amount: 30.00,
        items: [
          { item_name: "Chicken Caesar Salad", quantity: 1, price: 30.00 },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Jessica Martinez",
    email: "jessica.martinez@example.com",
    phone: "555-111-2223",
    last_visit: "2023-09-20",
    total_visits: 15,
    total_spend: 350.00,
    guest_orders: [
      {
        order_id: 11,
        order_date: "2023-09-20",
        total_amount: 70.00,
        items: [
          { item_name: "Lobster Bisque", quantity: 1, price: 70.00 },
        ],
      },
    ],
  },
];


export default guestsData;
