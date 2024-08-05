
import { Vendor } from "types/vendors";

const vendorsData: Vendor[] = [
    {
      "id": "v001",
      "companyName": "Southern Spirits Distributors",
      "contactName": "Emily Carter",
      "phoneNumber": "+1-305-555-1001",
      "email": "emily.carter@southernspirits.com",
      "address": {
        "street": "123 Ocean Drive",
        "city": "Miami Beach",
        "state": "FL",
        "zipCode": "33139"
      },
      "productsOffered": [
        {"SKU": "RUM-WH-01"}, 
        {"SKU": "GIN-TN-02"}
      ],
      "paymentTerms": "Net 30", 
      "notes": "Offers volume discounts on bulk orders."
    },
    {
      "id": "v002",
      "companyName": "Sunshine State Beverages",
      "contactName": "David Miller",
      "phoneNumber": "+1-786-555-1002",
      "email": "david.miller@sunshinestatebev.com",
      "address": {
        "street": "456 Palm Avenue",
        "city": "Miami",
        "state": "FL",
        "zipCode": "33125"
      },
      "productsOffered": [
        {"SKU": "VOD-AB-03"}, 
        {"SKU": "TEQ-RP-04"}
      ],
      "paymentTerms": "Net 15", 
      "notes": "Free delivery on orders over $1000."
    },
    {
      "id": "v003",
      "companyName": "Coastal Wine & Spirits Imports",
      "contactName": "Sophia Garcia",
      "phoneNumber": "+1-954-555-1003",
      "email": "sophia.garcia@coastalwinespirits.com",
      "address": {
        "street": "789 Bayside Blvd",
        "city": "Fort Lauderdale",
        "state": "FL",
        "zipCode": "33301"
      },
      "productsOffered": [
        {"SKU": "WHI-SB-05"}, 
        {"SKU": "RUM-DK-06"}
      ],
      "paymentTerms": "Net 30", 
      "notes": "Specializes in imported wines and spirits."
    },
    {
      "id": "v004",
      "companyName": "Florida Beverage Supply",
      "contactName": "Daniel Rodriguez",
      "phoneNumber": "+1-407-555-1004",
      "email": "daniel.rodriguez@floridabesupply.com",
      "address": {
        "street": "1001 Orange Grove Lane",
        "city": "Orlando",
        "state": "FL",
        "zipCode": "32801"
      },
      "productsOffered": [
        {"SKU": "BEER-IPA-07"}, 
        {"SKU": "CID-AP-08"}
      ],
      "paymentTerms": "Net 60",
      "notes": "Wide selection of craft beers and ciders."
    },
    {
      "id": "v005",
      "companyName": "Gulf Coast Liquor Distributors",
      "contactName": "Olivia Wilson",
      "phoneNumber": "+1-813-555-1005",
      "email": "olivia.wilson@gulfcoastliquor.com",
      "address": {
        "street": "1234 Harbour Island Drive",
        "city": "Tampa",
        "state": "FL",
        "zipCode": "33602"
      },
      "productsOffered": [
        {"SKU": "WINE-PN-09"}, 
        {"SKU": "SAKE-JN-10"}
      ],
      "paymentTerms": "Net 30", 
      "notes": "Offers competitive pricing and fast delivery."
    },
    {
      "id": "v006",
      "companyName": "Miami River Imports",
      "contactName": "Michael Lee",
      "phoneNumber": "+1-305-555-1006",
      "email": "michael.lee@miamriverimports.com",
      "address": {
        "street": "567 Riverwalk Plaza",
        "city": "Miami",
        "state": "FL",
        "zipCode": "33130"
      },
      "productsOffered": [
        {"SKU": "LIQU-CO-11"}, 
        {"SKU": "VERM-FR-12"}
      ],
      "paymentTerms": "Net 15",
      "notes": "Specializes in premium liquors and liqueurs."
    },
    {
      "id": "v007",
      "companyName": "Everglades Beverage Company",
      "contactName": "Isabella Martinez",
      "phoneNumber": "+1-561-555-1007",
      "email": "isabella.martinez@evergladesbev.com",
      "address": {
        "street": "890 Palm Beach Avenue",
        "city": "West Palm Beach",
        "state": "FL",
        "zipCode": "33401"
      },
      "productsOffered": [
        {"SKU": "VODKA-CI-13"}, 
        {"SKU": "GIN-LO-14"}
      ],
      "paymentTerms": "Net 30", 
      "notes": "Family-owned and operated business."
    },
    {
      "id": "v008",
      "companyName": "Atlantic Spirits & Wine",
      "contactName": "Ethan Brown",
      "phoneNumber": "+1-904-555-1008",
      "email": "ethan.brown@atlanticspiritswine.com",
      "address": {
        "street": "1002 Beach Boulevard",
        "city": "Jacksonville",
        "state": "FL",
        "zipCode": "32250"
      },
      "productsOffered": [
        {"SKU": "RUM-SP-15"}, 
        {"SKU": "TEQ-BL-16"}
      ],
      "paymentTerms": "Net 60", 
      "notes": "Offers a wide selection of spirits and wines at competitive prices."
    },
    {
      "id": "v009",
      "companyName": "Panhandle Beverage Distributors",
      "contactName": "Ava Williams",
      "phoneNumber": "+1-850-555-1009",
      "email": "ava.williams@panhandlebev.com",
      "address": {
        "street": "1234 Scenic Highway 98",
        "city": "Destin",
        "state": "FL",
        "zipCode": "32541"
      },
      "productsOffered": [
        {"SKU": "WINE-CH-17"}, 
        {"SKU": "BEER-ST-18"}
      ],
      "paymentTerms": "Net 30",
      "notes": "Serves the Florida Panhandle region."
    },
    {
      "id": "v010",
      "companyName": "Key West Imports",
      "contactName": "James Jones",
      "phoneNumber": "+1-305-555-1010",
      "email": "james.jones@keywestimports.com",
      "address": {
        "street": "5678 Duval Street",
        "city": "Key West",
        "state": "FL",
        "zipCode": "33040"
      },
      "productsOffered": [
        {"SKU": "LIQU-AM-19"},
        {"SKU": "RUM-AG-20"} 
      ],
      "paymentTerms": "Net 15", 
      "notes": "Specializes in imported Caribbean rums and liqueurs."
    }
  ];

export default vendorsData;