// constants/properties.js

const properties = [
   {
      id: "1", // Added to simulate ObjectId
      owner: "userId1", // Simulate ObjectId reference
      name: "Tesla House",
      type: "House",
      description: "Tesla House is a single story 3-bed 3-bath craftsman bungalow exuding warmth and grandeur with its 11’ high ceilings, natural wood finishes, and inviting open floor plan. Situated just east of downtown San Antonio in the charming Dignowity Hill historic district,known for its rich architectural heritage and vibrant community spirit.",
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
        "tesla0.jpg",
        "tesla1.jpg",
        "tesla2.jpg",
        "tesla3.jpg",
        "tesla4.jpg",
        "tesla5.jpg",
        "tesla6.jpg",
        "tesla7.jpg",
        "tesla8.jpg",
        "tesla9.jpg",
        "tesla10.jpg",
        "tesla11.jpg",
        "tesla12.jpg",
        "tesla13.jpg",
        "tesla14.jpg",
        "tesla15.jpg",
        "tesla16.jpg",
        "tesla17.jpg",
     

        
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
          nightly: "",
          weekly: 500,
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
          "san3.jpg",
          "san4.jpg",
          "san5.jpg",
          "san6.jpg",
          "san7.jpg",
          "san8.jpg",
          "san9.jpg",
          "san10.jpg",
          
        ],
        is_featured: false,
        createdAt: new Date().toISOString(), // Simulate timestamps
        updatedAt: new Date().toISOString(),
      },
    // Add more property objects as needed
    
  ];
  
  module.exports = properties;
  