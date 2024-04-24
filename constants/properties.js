// constants/properties.js

const properties = [
   {
      id: "1", // Added to simulate ObjectId
      owner: "userId1", // Simulate ObjectId reference
      name: "Tesla House",
      type: "House",
      description: "Tesla House is a single story 3-bed 3-bath craftsman bungalow exuding warmth and grandeur with its 11’ high ceilings, natural wood finishes, and inviting open floor plan. Situated just east of downtown San Antonio in the charming Dignowity Hill historic district,known for its rich architectural heritage and vibrant community spirit.",
      location: {
        street: "123 Main St  ",
        city: "San Antonio",
        state: "Texas",
        zipcode: "78202",
    
      },

      beds: 3,
      baths: 3,
      maxGuests: 6,
      square_feet: 1884,
      amenities: ["Fridge & Freezer with LCD entertainment screen and filtered water dispenser",
      "Gas Stove and Oven with Fume Hood",
      "Dish Washer",
      "Air Fryer",
      "Microwave",
      "Keurig Coffee Machine",
      "Kettle",
      "Pots & Pans",
      "Food Storage Containers",
      "Spice rack with spices",
      "Plates, bowls, cups & silverware",
      "Cooking Utensils & knives",
      "Cleaning supplies under kitchen sink",
      "Bath Towels",
      "Hand Towels",
      "Wash Rags",
      "Toilet Paper",
      "Shampoo",
      "Conditioner",
      "Body Soap",
      "Hand Soap",
      "Hair Dryer",
      "Queen Bed in each room",
      "Sheets & Comforter",
      "(4) pillows: (2) soft and (2) firm",
      "Extra blanket for bed",
      "Mini-Split HVAC in Master Bedroom",
      "65\" Smart TV",
      "Board games",
      "Side loading washer with top loader for small loads",
      "Side loading dryer with top loader for small loads",
      "Laundry Detergent",
      "Fabric Softeners",
      "Iron and Ironing Board",
      "BBQ Grill",
      "Hot Tub for (3) adults maximum (available upon request for an additional fee)",
      "Gen 3 Tesla EV charger & a J1772 compatible charging adapter (available upon request for an additional fee)",
      "Large front patio",
      "Rear Patio with misting system",
      "Security is provided with 24/7 professionally monitored camera surveillance. NO cameras are located inside the house.",
      "Hi Speed Wifi Internet 400 mbps"],
      rates: {
        nightly:"",
        weekly: 1000,
        monthly: 3000,
      },
      seller_info: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
      },
      images: [
        "th1.jpg",
        "th2.jpg",
        "th3.jpg",
        "th4.jpg",
        "th5.jpg",
        "th6.jpg",
        "th7.jpg",
        "th8.jpg",
        "th9.jpg",
        "th10.jpg",
        "th11.jpg",
        "th12.jpg",
        "th13.jpg",
        "th14.jpg",
        "th15.jpg",
        "th16.jpg",
        "th17.jpg",
        "th18.jpg",
        "th19.jpg",
        
     

        
      ],
      is_featured: false,
      createdAt: new Date().toISOString(), // Simulate timestamps
      updatedAt: new Date().toISOString(),
    },
  
    // Add more property objects as needed
    
  ];
  
  module.exports = properties;
  