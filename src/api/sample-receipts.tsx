import { Receipt } from "types/receipts";

const receiptsData: Receipt[] = [
    {
      "Name": "Saison Beer Recipe",
      "Image": "recipe-1.png",
      "Description": "Recipe for a refreshing saison beer with spicy and fruity notes.",
      "Category": "Beer",
      "inventory": {
        "TotalQty": 144
      },
      "ingredients": [
        {
          "name": "Malt",
          "quantity": "5 kg"
        },
        {
          "name": "Hops",
          "quantity": "100 g"
        },
        {
          "name": "Yeast",
          "quantity": "1 package"
        },
        {
          "name": "Water",
          "quantity": "20 L"
        }
      ],
      "instructions": "1. Mash the malt... 2. Boil the wort... 3. Ferment..."
    },
    {
      "Name": "Margarita Cocktail",
      "Image": "recipe-2.png",
      "Description": "A classic and refreshing tequila cocktail with lime and orange liqueur.",
      "Category": "Cocktail",
      "inventory": {
        "TotalQty": 50 
      },
      "ingredients": [
        {
          "name": "Tequila",
          "quantity": "2 oz"
        },
        {
          "name": "Lime Juice",
          "quantity": "1 oz"
        },
        {
          "name": "Orange Liqueur",
          "quantity": "1/2 oz"
        },
        {
          "name": "Salt",
          "quantity": "For rim"
        }
      ],
      "instructions": "1. Salt the rim of the glass... 2. Combine ingredients... 3. Shake with ice..."
    },
    {
      "Name": "Mojito Cocktail",
      "Image": "recipe-3.png",
      "Description": "A refreshing Cuban cocktail with rum, mint, lime, and sugar.",
      "Category": "Cocktail",
      "inventory": {
        "TotalQty": 60
      },
      "ingredients": [
        {
          "name": "White Rum",
          "quantity": "1.5 oz"
        },
        {
          "name": "Fresh Mint Leaves",
          "quantity": "10"
        },
        {
          "name": "Lime Juice",
          "quantity": "1 oz"
        },
        {
          "name": "Sugar",
          "quantity": "2 tsp"
        },
        {
          "name": "Soda Water",
          "quantity": "Top"
        }
      ],
      "instructions": "1. Muddle mint... 2. Add rum, lime juice, and sugar... 3. Shake with ice..."
    },
    {
      "Name": "Old Fashioned Cocktail",
      "Image": "recipe-4.png",
      "Description": "A classic whiskey cocktail with sugar, bitters, and a citrus twist.",
      "Category": "Cocktail",
      "inventory": {
        "TotalQty": 40 
      },
      "ingredients": [
        {
          "name": "Bourbon or Rye Whiskey",
          "quantity": "2 oz"
        },
        {
          "name": "Sugar Cube",
          "quantity": "1"
        },
        {
          "name": "Angostura Bitters",
          "quantity": "2 dashes"
        },
        {
          "name": "Orange Twist",
          "quantity": "1"
        }
      ],
      "instructions": "1. Muddle sugar... 2. Add whiskey and bitters... 3. Stir with ice..."
    },
    {
      "Name": "Moscow Mule",
      "Image": "recipe-5.png",
      "Description": "A refreshing vodka cocktail with ginger beer and lime juice.",
      "Category": "Cocktail",
      "inventory": {
        "TotalQty": 70
      },
      "ingredients": [
        {
          "name": "Vodka",
          "quantity": "1.5 oz"
        },
        {
          "name": "Lime Juice",
          "quantity": "1/2 oz"
        },
        {
          "name": "Ginger Beer",
          "quantity": "Top"
        }
      ],
      "instructions": "1. Fill a copper mug with ice... 2. Add vodka and lime juice... 3. Top with ginger beer..."
    },
   
  ];
  
  export default receiptsData;