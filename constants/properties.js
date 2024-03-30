// constants/properties.js

const properties = [
   {
      id: "1", // Added to simulate ObjectId
      owner: "userId1", // Simulate ObjectId reference
      name: "Tesla House",
      type: "House",
      description: "A cozy cottage with a beautiful garden.",
      location: {
        street: "123 Main St",
        city: "San Antonio",
        state: "Texas",
        zipcode: "12345",
      },
      beds: 3,
      baths: 3,
      square_feet: 1500,
      amenities: ["Garden", "Garage"],
      rates: {
        nightly: 200,
        weekly: 1000,
        monthly: 3000,
      },
      seller_info: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
      },
      images: [
        "tesla1.jpg",
        "tesla2.jpg",
        
      ],
      is_featured: false,
      createdAt: new Date().toISOString(), // Simulate timestamps
      updatedAt: new Date().toISOString(),
    },
    {
        id: "2", // Added to simulate ObjectId
        owner: "userId1", // Simulate ObjectId reference
        name: "San Diego House",
        type: "House",
        description: "A cozy cottage with a beautiful garden.",
        location: {
          street: "123 Main St",
          city: "San Diego",
          state: "CA",
          zipcode: "92111",
        },
        beds: 3,
        baths: 2,
        square_feet: 1600,
        amenities: ["Garden", "Garage"],
        rates: {
          nightly: 100,
          weekly: 600,
          monthly: 2000,
        },
        seller_info: {
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "123-456-7890",
        },
        images: [
          "san1.jpg",
          "san2.jpg",
          
        ],
        is_featured: false,
        createdAt: new Date().toISOString(), // Simulate timestamps
        updatedAt: new Date().toISOString(),
      },
    // Add more property objects as needed
    
  ];
  
  module.exports = properties;
  