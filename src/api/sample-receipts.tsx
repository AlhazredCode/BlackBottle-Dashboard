import { Receipt } from "types/receipts";

const receiptsData: Receipt[] = [
    {
      "Name": "Saison Beer Recipe",
      "Image": "prod-9.png",
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
      "Image": "prod-1.png",
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
      "Image": "prod-2.png",
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
      "Image": "prod-3.png",
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
      "Image": "prod-4.png",
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
    {
      "Name": "Daiquiri Cocktail",
      "Image": "prod-5.png",
      "Description": "A simple and classic rum cocktail with lime juice and sugar.",
      "Category": "Cocktail",
      "inventory": {
        "TotalQty": 55
      },
      "ingredients": [
        {
          "name": "White Rum",
          "quantity": "2 oz"
        },
        {
          "name": "Lime Juice",
          "quantity": "1 oz"
        },
        {
          "name": "Simple Syrup",
          "quantity": "3/4 oz"
        }
      ],
      "instructions": "1. Combine ingredients... 2. Shake with ice... 3. Strain into a chilled glass..."
    },
    {
      "Name": "Cosmopolitan Cocktail",
      "Image": "prod-6.png",
      "Description": "A sophisticated vodka cocktail with cranberry juice, lime juice, and orange liqueur.",
      "Category": "Cocktail",
      "inventory": {
        "TotalQty": 45
      },
      "ingredients": [
        {
          "name": "Citrus Vodka",
          "quantity": "1.5 oz"
        },
        {
          "name": "Cointreau",
          "quantity": "1 oz"
        },
        {
          "name": "Cranberry Juice",
          "quantity": "1 oz"
        },
        {
          "name": "Lime Juice",
          "quantity": "1/2 oz"
        }
      ],
      "instructions": "1. Combine ingredients... 2. Shake with ice... 3. Strain into a chilled martini glass..."
    },
    {
      "Name": "Negroni Cocktail",
      "Image": "prod-7.png",
      "Description": "A bitter and sophisticated Italian cocktail with gin, Campari, and sweet vermouth.",
      "Category": "Cocktail",
      "inventory": {
        "TotalQty": 35
      },
      "ingredients": [
        {
          "name": "Gin",
          "quantity": "1 oz"
        },
        {
          "name": "Campari",
          "quantity": "1 oz"
        },
        {
          "name": "Sweet Vermouth",
          "quantity": "1 oz"
        }
      ],
      "instructions": "1. Combine ingredients... 2. Stir with ice... 3. Strain into a rocks glass..."
    },
    {
      "Name": "Whiskey Sour",
      "Image": "prod-8.png",
      "Description": "A classic whiskey cocktail with lemon juice, sugar, and an optional egg white.",
      "Category": "Cocktail",
      "inventory": {
        "TotalQty": 65 
      },
      "ingredients": [
        {
          "name": "Bourbon Whiskey",
          "quantity": "2 oz"
        },
        {
          "name": "Lemon Juice",
          "quantity": "3/4 oz"
        },
        {
          "name": "Simple Syrup",
          "quantity": "3/4 oz"
        },
        {
          "name": "Egg White",
          "quantity": "Optional"
        }
      ],
      "instructions": "1. Combine ingredients... 2. Shake without ice (dry shake)... 3. Shake with ice..."
    },
    {
      "Name": "Manhattan Cocktail",
      "Image": "prod-10.png",
      "Description": "A sophisticated whiskey cocktail with sweet vermouth and bitters.",
      "Category": "Cocktail",
      "inventory": {
        "TotalQty": 40
      },
      "ingredients": [
        {
          "name": "Rye Whiskey",
          "quantity": "2 oz"
        },
        {
          "name": "Sweet Vermouth",
          "quantity": "1 oz"
        },
        {
          "name": "Angostura Bitters",
          "quantity": "2 dashes"
        },
        {
          "name": "Cherry",
          "quantity": "For garnish"
        }
      ],
      "instructions": "1. Combine ingredients... 2. Stir with ice... 3. Strain into a chilled coupe glass..."
    }
  ];
  
  export default receiptsData;