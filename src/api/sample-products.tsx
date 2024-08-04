
import { Product } from "types/products";

const productsData: Product[] = [
    {
        "Name": "Craft IPA Beer",
        "Brand": "Brewdog",
        "Image": "prod-1.png",
        "Description": "A bitter and refreshing IPA with citrus and pine notes.",
        "Price": 7.50,
        "PurchaseCost": 4.00,
        "Casesize": 12,
        "Par": 3,
        "UPC": "123456789012",
        "SKU": "IPA-BD-001",
        "Taste": "Bitter, citrus, pine",
        "Provider": "Southern Beverage Distributor",
        "Status": true,
        "Category": "Beer",
        "inventory": {
            "TotalQty": 100,
            "TotalCases": 20,
            "CaseSize": 12,
            "bars": {
                "Bar1": {
                    "QtyBar1": 30,
                    "CasesBar1": 5
                },
                "Bar2": {
                    "QtyBar2": 40,
                    "CasesBar2": 8
                },
                "Bar3": {
                    "QtyBar3": 30,
                    "CasesBar3": 7
                }
            }
        }
    },
    {
        "Name": "Lager Beer",
        "Brand": "Heineken",
        "Image": "prod-2.png",
        "Description": "A classic lager beer, smooth and refreshing.",
        "Price": 5.00,
        "PurchaseCost": 2.50,
        "Casesize": 24,
        "Par": 5,
        "UPC": "987654321012",
        "SKU": "LAG-HK-001",
        "Taste": "Smooth, light",
        "Provider": "National Supplier",
        "Status": true,
        "Category": "Beer",
        "inventory": {
            "TotalQty": 72,
            "TotalCases": 12,
            "CaseSize": 6,
            "bars": {
                "Bar1": {
                    "QtyBar1": 18,
                    "CasesBar1": 3
                },
                "Bar2": {
                    "QtyBar2": 30,
                    "CasesBar2": 5
                },
                "Bar3": {
                    "QtyBar3": 24,
                    "CasesBar3": 4
                }
            }
        }
    },
    {
        "Name": "Wheat Beer",
        "Brand": "Paulaner",
        "Image": "prod-3.png",
        "Description": "A traditional German wheat beer with notes of banana and clove.",
        "Price": 6.75,
        "PurchaseCost": 3.50,
        "Casesize": 12,
        "Par": 2,
        "UPC": "567890123456",
        "SKU": "TRI-PL-001",
        "Taste": "Banana, clove, spices",
        "Provider": "European Beer Importer",
        "Status": true,
        "Category": "Beer",
        "inventory": {
            "TotalQty": 72,
            "TotalCases": 12,
            "CaseSize": 6,
            "bars": {
                "Bar1": {
                    "QtyBar1": 18,
                    "CasesBar1": 3
                },
                "Bar2": {
                    "QtyBar2": 30,
                    "CasesBar2": 5
                },
                "Bar3": {
                    "QtyBar3": 24,
                    "CasesBar3": 4
                }
            }
        }
    },
    {
        "Name": "Pale Ale Beer",
        "Brand": "Sierra Nevada",
        "Image": "prod-4.png",
        "Description": "A balanced pale ale with notes of caramel and citrus fruits.",
        "Price": 6.00,
        "PurchaseCost": 3.20,
        "Casesize": 12,
        "Par": 4,
        "UPC": "234567890123",
        "SKU": "PAL-SN-001",
        "Taste": "Caramel, citrus, hops",
        "Provider": "Northern Beverage Distributor",
        "Status": true,
        "Category": "Beer",
        "inventory": {
            "TotalQty": 200,
            "TotalCases": 25,
            "CaseSize": 8,
            "bars": {
                "Bar1": {
                    "QtyBar1": 60,
                    "CasesBar1": 7.5
                },
                "Bar2": {
                    "QtyBar2": 80,
                    "CasesBar2": 10
                },
                "Bar3": {
                    "QtyBar3": 60,
                    "CasesBar3": 7.5
                }
            }
        }
    },
    {
        "Name": "Stout Beer",
        "Brand": "Guinness",
        "Image": "prod-5.png",
        "Description": "A creamy Irish stout with notes of coffee and chocolate.",
        "Price": 7.00,
        "PurchaseCost": 3.75,
        "Casesize": 12,
        "Par": 2,
        "UPC": "876543210123",
        "SKU": "STO-GU-001",
        "Taste": "Coffee, chocolate, roasted",
        "Provider": "International Liquor Importer",
        "Status": true,
        "Category": "Beer",
        "inventory": {
            "TotalQty": 200,
            "TotalCases": 25,
            "CaseSize": 8,
            "bars": {
                "Bar1": {
                    "QtyBar1": 60,
                    "CasesBar1": 7.5
                },
                "Bar2": {
                    "QtyBar2": 80,
                    "CasesBar2": 10
                },
                "Bar3": {
                    "QtyBar3": 60,
                    "CasesBar3": 7.5
                }
            }
        }
    },
    {
        "Name": "Amber Ale Beer",
        "Brand": "New Belgium",
        "Image":"prod-6.png",
        "Description": "An amber ale with notes of caramel and dried fruits.",
        "Price": 5.75,
        "PurchaseCost": 3.00,
        "Casesize": 12,
        "Par": 3,
        "UPC": "456789012345",
        "SKU": "AMB-NB-001",
        "Taste": "Caramel, dried fruits, malt",
        "Provider": "Special Beverage Distributor",
        "Status": true,
        "Category": "Beer",
        "inventory": {
            "TotalQty": 200,
            "TotalCases": 25,
            "CaseSize": 8,
            "bars": {
                "Bar1": {
                    "QtyBar1": 60,
                    "CasesBar1": 7.5
                },
                "Bar2": {
                    "QtyBar2": 80,
                    "CasesBar2": 10
                },
                "Bar3": {
                    "QtyBar3": 60,
                    "CasesBar3": 7.5
                }
            }
        }
    },
    {
        "Name": "Pilsner Beer",
        "Brand": "Stella Artois",
        "Image": "prod-7.png",
        "Description": "A refreshing and crisp Belgian pilsner beer.",
        "Price": 5.25,
        "PurchaseCost": 2.70,
        "Casesize": 24,
        "Par": 4,
        "UPC": "789012345678",
        "SKU": "PIL-SA-001",
        "Taste": "Crisp, clean, malt",
        "Provider": "Imported Beverage Supplier",
        "Status": true,
        "Category": "Beer",
        "inventory": {
            "TotalQty": 200,
            "TotalCases": 25,
            "CaseSize": 8,
            "bars": {
                "Bar1": {
                    "QtyBar1": 60,
                    "CasesBar1": 7.5
                },
                "Bar2": {
                    "QtyBar2": 80,
                    "CasesBar2": 10
                },
                "Bar3": {
                    "QtyBar3": 60,
                    "CasesBar3": 7.5
                }
            }
        }
    },
    {
        "Name": "Porter Beer",
        "Brand": "Deschutes",
        "Image": "prod-8.png",
        "Description": "A robust porter beer with notes of dark chocolate and coffee.",
        "Price": 6.50,
        "PurchaseCost": 3.40,
        "Casesize": 12,
        "Par": 2,
        "UPC": "345678901234",
        "SKU": "POR-DE-001",
        "Taste": "Dark chocolate, coffee, roasted",
        "Provider": "Craft Beer Distributor",
        "Status": true,
        "Category": "Beer",
        "inventory": {
            "TotalQty": 200,
            "TotalCases": 25,
            "CaseSize": 8,
            "bars": {
                "Bar1": {
                    "QtyBar1": 60,
                    "CasesBar1": 7.5
                },
                "Bar2": {
                    "QtyBar2": 80,
                    "CasesBar2": 10
                },
                "Bar3": {
                    "QtyBar3": 60,
                    "CasesBar3": 7.5
                }
            }
        }
    },
    {
        "Name": "Saison Beer",
        "Brand": "Boulevard",
        "Image": "prod-9.png",
        "Description": "A refreshing saison beer with spicy and fruity notes.",
        "Price": 6.25,
        "PurchaseCost": 3.30,
        "Casesize": 12,
        "Par": 3,
        "UPC": "678901234567",
        "SKU": "SAI-BO-001",
        "Taste": "Spices, fruits, yeast",
        "Provider": "Belgian Beer Importer",
        "Status": true,
        "Category": "Beer",
        "inventory": {
            "TotalQty": 144,
            "TotalCases": 18,
            "CaseSize": 8,
            "bars": {
                "Bar1": {
                    "QtyBar1": 40,
                    "CasesBar1": 5
                },
                "Bar2": {
                    "QtyBar2": 64,
                    "CasesBar2": 8
                },
                "Bar3": {
                    "QtyBar3": 40,
                    "CasesBar3": 5
                }
            }
        }
    },
    {
        "Name": "Sour Ale Beer",
        "Brand": "Dogfish Head",
        "Image": "prod-10.png",
        "Description": "A sour ale beer, tart and refreshing with notes of citrus fruits.",
        "Price": 7.75,
        "PurchaseCost": 4.10,
        "Casesize": 12,
        "Par": 2,
        "UPC": "012345678901",
        "SKU": "SOU-DH-001",
        "Taste": "Tart, citrus, fruits",
        "Provider": "Exotic Beverage Distributor",
        "Status": true,
        "Category": "Beer",
        "inventory": {
            "TotalQty": 144,
            "TotalCases": 18,
            "CaseSize": 8,
            "bars": {
                "Bar1": {
                    "QtyBar1": 40,
                    "CasesBar1": 5
                },
                "Bar2": {
                    "QtyBar2": 64,
                    "CasesBar2": 8
                },
                "Bar3": {
                    "QtyBar3": 40,
                    "CasesBar3": 5
                }
            }
        }
    },

    {
        "Name": "Cabernet Sauvignon",
        "Brand": "Robert Mondavi",
        "Image": "Product-11",
        "Description": "A full-bodied red wine with aromas of black currant, vanilla, and cedar.",
        "Price": 22.99,
        "PurchaseCost": 14.50,
        "Casesize": 12,
        "Par": 2,
        "UPC": "789012345679",
        "SKU": "CAB-RM-001",
        "Taste": "Black currant, vanilla, cedar",
        "Provider": "Wine Country Imports",
        "Status": true,
        "Category": "Wine",
          "inventory": {
            "TotalQty": 144,
            "TotalCases": 18,
            "CaseSize": 8,
            "bars": {
                "Bar1": {
                    "QtyBar1": 40,
                    "CasesBar1": 5
                },
                "Bar2": {
                    "QtyBar2": 64,
                    "CasesBar2": 8
                },
                "Bar3": {
                    "QtyBar3": 40,
                    "CasesBar3": 5
                }
            }
        }
    },
    {
        "Name": "Pinot Noir",
        "Brand": "Erath",
        "Image": "Product-12",
        "Description": "A light-bodied red wine with notes of cherry, raspberry, and spice.",
        "Price": 18.75,
        "PurchaseCost": 11.00,
        "Casesize": 12,
        "Par": 3,
        "UPC": "890123456780",
        "SKU": "PIN-ER-001",
        "Taste": "Cherry, raspberry, spice",
        "Provider": "West Coast Wine Distributors",
        "Status": true,
        "Category": "Wine",
          "inventory": {
            "TotalQty": 90,
            "TotalCases": 15,
            "CaseSize": 6,
            "bars": {
                "Bar1": {
                    "QtyBar1": 30,
                    "CasesBar1": 5
                },
                "Bar2": {
                    "QtyBar2": 36,
                    "CasesBar2": 6
                },
                "Bar3": {
                    "QtyBar3": 24,
                    "CasesBar3": 4
                }
            }
        }
    },
    {
        "Name": "Chardonnay",
        "Brand": "Kendall-Jackson",
        "Image": "Product-13",
        "Description": "A medium-bodied white wine with flavors of pear, citrus, and a touch of oak.",
        "Price": 19.99,
        "PurchaseCost": 12.00,
        "Casesize": 12,
        "Par": 4,
        "UPC": "901234567891",
        "SKU": "CHA-KJ-001",
        "Taste": "Pear, citrus, oak",
        "Provider": "National Wine & Spirits",
        "Status": true,
        "Category": "Wine",
          "inventory": {
            "TotalQty": 90,
            "TotalCases": 15,
            "CaseSize": 6,
            "bars": {
                "Bar1": {
                    "QtyBar1": 30,
                    "CasesBar1": 5
                },
                "Bar2": {
                    "QtyBar2": 36,
                    "CasesBar2": 6
                },
                "Bar3": {
                    "QtyBar3": 24,
                    "CasesBar3": 4
                }
            }
        }
    },
    {
        "Name": "Sauvignon Blanc",
        "Brand": "Kim Crawford",
        "Image": "Product-14",
        "Description": "A crisp, refreshing white wine with aromas of grapefruit, passionfruit, and herbs.",
        "Price": 17.50,
        "PurchaseCost": 10.50,
        "Casesize": 12,
        "Par": 3,
        "UPC": "012345678902",
        "SKU": "SAU-KC-001",
        "Taste": "Grapefruit, passionfruit, herbs",
        "Provider": "Global Wine Importers",
        "Status": true,
        "Category": "Wine",
          "inventory": {
            "TotalQty": 90,
            "TotalCases": 15,
            "CaseSize": 6,
            "bars": {
                "Bar1": {
                    "QtyBar1": 30,
                    "CasesBar1": 5
                },
                "Bar2": {
                    "QtyBar2": 36,
                    "CasesBar2": 6
                },
                "Bar3": {
                    "QtyBar3": 24,
                    "CasesBar3": 4
                }
            }
        }
    },
    {
        "Name": "Merlot",
        "Brand": "Chateau Ste. Michelle",
        "Image": "Product-15",
        "Description": "A smooth, approachable red wine with flavors of plum, cherry, and chocolate.",
        "Price": 21.00,
        "PurchaseCost": 13.00,
        "Casesize": 12,
        "Par": 2,
        "UPC": "123456789013",
        "SKU": "MER-CSM-001",
        "Taste": "Plum, cherry, chocolate",
        "Provider": "Fine Wine Distributors",
        "Status": true,
        "Category": "Wine",
          "inventory": {
            "TotalQty": 90,
            "TotalCases": 15,
            "CaseSize": 6,
            "bars": {
                "Bar1": {
                    "QtyBar1": 30,
                    "CasesBar1": 5
                },
                "Bar2": {
                    "QtyBar2": 36,
                    "CasesBar2": 6
                },
                "Bar3": {
                    "QtyBar3": 24,
                    "CasesBar3": 4
                }
            }
        }
    },
    {
        "Name": "Pinot Grigio",
        "Brand": "Santa Margherita",
        "Image": "Product-16",
        "Description": "A light, crisp white wine with aromas of pear, lemon, and white flowers.",
        "Price": 19.50,
        "PurchaseCost": 11.75,
        "Casesize": 12,
        "Par": 3,
        "UPC": "234567890124",
        "SKU": "PIN-SM-001",
        "Taste": "Pear, lemon, white flowers",
        "Provider": "Italian Wine Importers",
        "Status": true,
        "Category": "Wine",
          "inventory": {
            "TotalQty": 300,
            "TotalCases": 50,
            "CaseSize": 6,
            "bars": {
                "Bar1": {
                    "QtyBar1": 100,
                    "CasesBar1": 16.67
                },
                "Bar2": {
                    "QtyBar2": 120,
                    "CasesBar2": 20
                },
                "Bar3": {
                    "QtyBar3": 80,
                    "CasesBar3": 13.33
                }
            }
        }
    },
    {
        "Name": "Zinfandel",
        "Brand": "Bogle",
        "Image": "Product-17",
        "Description": "A bold, fruity red wine with notes of blackberry, jam, and spice.",
        "Price": 16.99,
        "PurchaseCost": 9.99,
        "Casesize": 12,
        "Par": 4,
        "UPC": "345678901235",
        "SKU": "ZIN-BO-001",
        "Taste": "Blackberry, jam, spice",
        "Provider": "California Wine Direct",
        "Status": true,
        "Category": "Wine",
          "inventory": {
            "TotalQty": 300,
            "TotalCases": 50,
            "CaseSize": 6,
            "bars": {
                "Bar1": {
                    "QtyBar1": 100,
                    "CasesBar1": 16.67
                },
                "Bar2": {
                    "QtyBar2": 120,
                    "CasesBar2": 20
                },
                "Bar3": {
                    "QtyBar3": 80,
                    "CasesBar3": 13.33
                }
            }
        }
    },
    {
        "Name": "Riesling",
        "Brand": "Dr. Loosen",
        "Image": "Product-18",
        "Description": "A sweet, aromatic white wine with flavors of peach, apricot, and honey.",
        "Price": 20.50,
        "PurchaseCost": 12.75,
        "Casesize": 12,
        "Par": 2,
        "UPC": "456789012346",
        "SKU": "RIE-DL-001",
        "Taste": "Peach, apricot, honey",
        "Provider": "German Wine Importers",
        "Status": true,
        "Category": "Wine",
          "inventory": {
            "TotalQty": 300,
            "TotalCases": 50,
            "CaseSize": 6,
            "bars": {
                "Bar1": {
                    "QtyBar1": 100,
                    "CasesBar1": 16.67
                },
                "Bar2": {
                    "QtyBar2": 120,
                    "CasesBar2": 20
                },
                "Bar3": {
                    "QtyBar3": 80,
                    "CasesBar3": 13.33
                }
            }
        }
    },
    {
        "Name": "Malbec",
        "Brand": "Catena Zapata",
        "Image": "Product-19",
        "Description": "A full-bodied red wine with aromas of blackberry, plum, and vanilla.",
        "Price": 24.99,
        "PurchaseCost": 15.00,
        "Casesize": 12,
        "Par": 3,
        "UPC": "567890123457",
        "SKU": "MAL-CZ-001",
        "Taste": "Blackberry, plum, vanilla",
        "Provider": "Argentinian Wine Specialists",
        "Status": true,
        "Category": "Wine",
          "inventory": {
            "TotalQty": 50,
            "TotalCases": 10,
            "CaseSize": 5,
            "bars": {
                "Bar1": {
                    "QtyBar1": 15,
                    "CasesBar1": 3
                },
                "Bar2": {
                    "QtyBar2": 20,
                    "CasesBar2": 4
                },
                "Bar3": {
                    "QtyBar3": 15,
                    "CasesBar3": 3
                }
            }
        }
    },
    {
        "Name": "Rosé",
        "Brand": "Whispering Angel",
        "Image": "Product-20",
        "Description": "A dry, refreshing rosé wine with notes of strawberry, raspberry, and citrus.",
        "Price": 23.75,
        "PurchaseCost": 14.25,
        "Casesize": 12,
        "Par": 4,
        "UPC": "678901234568",
        "SKU": "ROS-WA-001",
        "Taste": "Strawberry, raspberry, citrus",
        "Provider": "French Wine Importers",
        "Status": true,
        "Category": "Wine",
          "inventory": {
            "TotalQty": 50,
            "TotalCases": 10,
            "CaseSize": 5,
            "bars": {
                "Bar1": {
                    "QtyBar1": 15,
                    "CasesBar1": 3
                },
                "Bar2": {
                    "QtyBar2": 20,
                    "CasesBar2": 4
                },
                "Bar3": {
                    "QtyBar3": 15,
                    "CasesBar3": 3
                }
            }
        }
    },

    {
        "Name": "Tequila Blanco",
        "Brand": "Patron Silver",
        "Image": "Product-21",
        "Description": "A smooth, crisp tequila with aromas of agave, citrus, and pepper.",
        "Price": 45.99,
        "PurchaseCost": 28.00,
        "Casesize": 12,
        "Par": 2,
        "UPC": "789012345680",
        "SKU": "TBL-PS-001",
        "Taste": "Agave, citrus, pepper",
        "Provider": "Agave Spirits Distributors",
        "Status": true,
        "Category": "Tequila",
          "inventory": {
            "TotalQty": 50,
            "TotalCases": 10,
            "CaseSize": 5,
            "bars": {
                "Bar1": {
                    "QtyBar1": 15,
                    "CasesBar1": 3
                },
                "Bar2": {
                    "QtyBar2": 20,
                    "CasesBar2": 4
                },
                "Bar3": {
                    "QtyBar3": 15,
                    "CasesBar3": 3
                }
            }
        }
    },
    {
        "Name": "Tequila Reposado",
        "Brand": "Casamigos",
        "Image": "Product-22",
        "Description": "An aged tequila with notes of caramel, vanilla, and spice.",
        "Price": 54.75,
        "PurchaseCost": 33.50,
        "Casesize": 12,
        "Par": 3,
        "UPC": "890123456781",
        "SKU": "TRE-CA-001",
        "Taste": "Caramel, vanilla, spice",
        "Provider": "Premium Tequila Imports",
        "Status": true,
        "Category": "Tequila",
          "inventory": {
            "TotalQty": 120,
            "TotalCases": 15,
            "CaseSize": 8,
            "bars": {
                "Bar1": {
                    "QtyBar1": 40,
                    "CasesBar1": 5
                },
                "Bar2": {
                    "QtyBar2": 48,
                    "CasesBar2": 6
                },
                "Bar3": {
                    "QtyBar3": 32,
                    "CasesBar3": 4
                }
            }
        }
    },
    {
        "Name": "Tequila Añejo",
        "Brand": "Don Julio 1942",
        "Image": "Product-23",
        "Description": "A smooth, complex tequila with flavors of oak, chocolate, and dried fruit.",
        "Price": 129.99,
        "PurchaseCost": 80.00,
        "Casesize": 6,
        "Par": 1,
        "UPC": "901234567892",
        "SKU": "TAN-DJ-001",
        "Taste": "Oak, chocolate, dried fruit",
        "Provider": "Luxury Spirits Distributors",
        "Status": true,
        "Category": "Tequila",
          "inventory": {
            "TotalQty": 120,
            "TotalCases": 15,
            "CaseSize": 8,
            "bars": {
                "Bar1": {
                    "QtyBar1": 40,
                    "CasesBar1": 5
                },
                "Bar2": {
                    "QtyBar2": 48,
                    "CasesBar2": 6
                },
                "Bar3": {
                    "QtyBar3": 32,
                    "CasesBar3": 4
                }
            }
        }
    },
    {
        "Name": "Tequila Cristalino",
        "Brand": "Maestro Dobel Diamante",
        "Image": "Product-24",
        "Description": "A crystal-clear aged tequila with a smooth, refined taste.",
        "Price": 72.50,
        "PurchaseCost": 45.00,
        "Casesize": 12,
        "Par": 2,
        "UPC": "012345678903",
        "SKU": "TCR-MD-001",
        "Taste": "Agave, citrus, floral",
        "Provider": "Exclusive Tequila Importers",
        "Status": true,
        "Category": "Tequila",
          "inventory": {
            "TotalQty": 120,
            "TotalCases": 15,
            "CaseSize": 8,
            "bars": {
                "Bar1": {
                    "QtyBar1": 40,
                    "CasesBar1": 5
                },
                "Bar2": {
                    "QtyBar2": 48,
                    "CasesBar2": 6
                },
                "Bar3": {
                    "QtyBar3": 32,
                    "CasesBar3": 4
                }
            }
        }
    },
    {
        "Name": "Tequila Extra Añejo",
        "Brand": "Clase Azul Reposado",
        "Image": "Product-25",
        "Description": "An exceptionally smooth and complex tequila with a long, warm finish.",
        "Price": 210.00,
        "PurchaseCost": 130.00,
        "Casesize": 6,
        "Par": 1,
        "UPC": "123456789014",
        "SKU": "TEX-CA-001",
        "Taste": "Oak, vanilla, caramel, spice",
        "Provider": "Ultra-Premium Tequila Distributors",
        "Status": true,
        "Category": "Tequila",
        "inventory": {
            "TotalQty": 250,
            "TotalCases": 25,
            "CaseSize": 10,
            "bars": {
                "Bar1": {
                    "QtyBar1": 80,
                    "CasesBar1": 8
                },
                "Bar2": {
                    "QtyBar2": 100,
                    "CasesBar2": 10
                },
                "Bar3": {
                    "QtyBar3": 70,
                    "CasesBar3": 7
                }
    }}},
    {
        "Name": "Tequila Blanco Organico",
        "Brand": "Fortaleza",
        "Image": "Product-26",
        "Description": "An organic tequila with a clean, crisp taste and a hint of citrus.",
        "Price": 48.50,
        "PurchaseCost": 30.00,
        "Casesize": 12,
        "Par": 2,
        "UPC": "234567890125",
        "SKU": "TBO-FO-001",
        "Taste": "Agave, citrus, pepper",
        "Provider": "Organic Spirits Importers",
        "Status": true,
        "Category": "Tequila",
          "inventory": {
            "TotalQty": 250,
            "TotalCases": 25,
            "CaseSize": 10,
            "bars": {
                "Bar1": {
                    "QtyBar1": 80,
                    "CasesBar1": 8
                },
                "Bar2": {
                    "QtyBar2": 100,
                    "CasesBar2": 10
                },
                "Bar3": {
                    "QtyBar3": 70,
                    "CasesBar3": 7
                }
            }
        }
    },
    {
        "Name": "Tequila Reposado Especial",
        "Brand": "Herradura",
        "Image": "Product-27",
        "Description": "A smooth, well-balanced reposado tequila with notes of oak and vanilla.",
        "Price": 59.99,
        "PurchaseCost": 36.00,
        "Casesize": 12,
        "Par": 3,
        "UPC": "345678901236",
        "SKU": "TRS-HE-001",
        "Taste": "Agave, oak, vanilla, spice",
        "Provider": "National Tequila Distributors",
        "Status": true,
        "Category": "Tequila",
          "inventory": {
            "TotalQty": 250,
            "TotalCases": 25,
            "CaseSize": 10,
            "bars": {
                "Bar1": {
                    "QtyBar1": 80,
                    "CasesBar1": 8
                },
                "Bar2": {
                    "QtyBar2": 100,
                    "CasesBar2": 10
                },
                "Bar3": {
                    "QtyBar3": 70,
                    "CasesBar3": 7
                }
            }
        }
    },
    {
        "Name": "Tequila Añejo Cristalino",
        "Brand": "Volcan De Mi Tierra",
        "Image": "Product-28",
        "Description": "A crystal-clear añejo tequila with a smooth, complex flavor.",
        "Price": 87.50,
        "PurchaseCost": 53.00,
        "Casesize": 12,
        "Par": 2,
        "UPC": "456789012347",
        "SKU": "TAC-VD-001",
        "Taste": "Cooked agave, oak, citrus",
        "Provider": "Premium Tequila Importers",
        "Status": true,
        "Category": "Tequila",
          "inventory": {
            "TotalQty": 250,
            "TotalCases": 25,
            "CaseSize": 10,
            "bars": {
                "Bar1": {
                    "QtyBar1": 80,
                    "CasesBar1": 8
                },
                "Bar2": {
                    "QtyBar2": 100,
                    "CasesBar2": 10
                },
                "Bar3": {
                    "QtyBar3": 70,
                    "CasesBar3": 7
                }
            }
        }
    },
    {
        "Name": "Tequila Extra Añejo Limited Edition",
        "Brand": "Gran Patron Burdeos",
        "Image": "Product-29",
        "Description": "An ultra-premium tequila aged in Bordeaux wine barrels.",
        "Price": 325.00,
        "PurchaseCost": 200.00,
        "Casesize": 6,
        "Par": 1,
        "UPC": "567890123458",
        "SKU": "TEL-GP-001",
        "Taste": "Oak, vanilla, dried fruit, chocolate",
        "Provider": "Luxury Spirits Distributors",
        "Status": true,
        "Category": "Tequila",
          "inventory": {
            "TotalQty": 84,
            "TotalCases": 14,
            "CaseSize": 6,
            "bars": {
                "Bar1": {
                    "QtyBar1": 24,
                    "CasesBar1": 4
                },
                "Bar2": {
                    "QtyBar2": 36,
                    "CasesBar2": 6
                },
                "Bar3": {
                    "QtyBar3": 24,
                    "CasesBar3": 4
                }
            }
        }},
        {
        "Name": "Tequila Blanco Small Batch",
        "Brand": "Tapatio",
        "Image": "Product-30",
        "Description": "A handcrafted tequila made in small batches with a smooth, agave-forward flavor.",
        "Price": 49.99,
        "PurchaseCost": 31.00,
        "Casesize": 12,
        "Par": 2,
        "UPC": "678901234569",
        "SKU": "TBS-TA-001",
        "Taste": "Agave, citrus, pepper, mineral",
        "Provider": "Artisan Tequila Importers",
        "Status": true,
        "Category": "Tequila",
          "inventory": {
            "TotalQty": 84,
            "TotalCases": 14,
            "CaseSize": 6,
            "bars": {
                "Bar1": {
                    "QtyBar1": 24,
                    "CasesBar1": 4
                },
                "Bar2": {
                    "QtyBar2": 36,
                    "CasesBar2": 6
                },
                "Bar3": {
                    "QtyBar3": 24,
                    "CasesBar3": 4
                }
            }
        },
    }
];

export default productsData;