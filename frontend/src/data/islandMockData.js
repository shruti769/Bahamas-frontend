// data/islandMockData.js

export const islandDetailData = {
  id: 1,
  title: "Blissful Abode 2 Bhk Attic/Private Terrace Siolim",
  location: "Siolim, India",
  
  // Image Gallery Data
  images: [
    "/assets/island1.jpg",
    "/assets/island2.jpg",
    "/assets/island3.jpg",
    "/assets/island4.jpg",
    "/assets/island5.jpg",
  ],

  // Property Details
  details: {
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
  },

  // Host Information
  host: {
    name: "Noella",
    avatar: "/api/placeholder/48/48",
    isSuperhost: true,
    hostingYears: 2,
    joinDate: "Joined in 2019",
    responseRate: "100%",
    responseTime: "within an hour",
    reviews: 12,
    verified: true,
  },

  // Features
  features: [
    {
      icon: "home",
      title: "Entire home",
      description: "You'll have the apartment to yourself",
    },
    {
      icon: "sparkles",
      title: "Enhanced Clean",
      description: "This Host committed to Airbnb's 5-step enhanced cleaning process.",
      showMore: true,
    },
    {
      icon: "calendar",
      title: "Self check-in",
      description: "Check yourself in with the keypad.",
    },
  ],

  // Description
  description: "Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux. Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44.",

  // Pricing
  price: {
    original: 345.30,
    current: 32.30,
    for2Nights: true,
  },

  pricesIncludeAllFees: true,
  cancellationPolicy: "Free cancellation",

  // Rating
  rating: 5.0,
  reviewCount: 7,

  // Sleeping Arrangements
  sleepingArrangements: [
    {
      room: "Bedroom 1",
      bed: "1 queen bed",
      image: "/api/placeholder/300/200",
    },
    {
      room: "Bedroom 2",
      bed: "1 queen bed",
      image: "/api/placeholder/300/200",
    },
  ],

  // Amenities
  amenities: [
    { icon: "garden", label: "Garden view" },
    { icon: "kitchen", label: "Kitchen" },
    { icon: "wifi", label: "Wifi" },
    { icon: "pets", label: "Pets allowed" },
    { icon: "washer", label: "Free washer - in building" },
    { icon: "dryer", label: "Dryer" },
    { icon: "ac", label: "Central air conditioning" },
    { icon: "security", label: "Security cameras on property" },
    { icon: "refrigerator", label: "Refrigerator" },
  ],
  totalAmenities: 37,

  // Availability
  availability: [
    {
      date: "Thursday, 1 January",
      time: "8:00am - 2:45pm",
      guests: "Up to 10 guests",
    },
    {
      date: "Friday, 2 January",
      time: "8:00am - 2:45pm",
      guests: "Up to 10 guests",
    },
    {
      date: "Saturday, 3 January",
      time: "8:00am - 2:45pm",
      guests: "Up to 10 guests",
    },
  ],

  // Pricing for Availability Section
  pricing: {
    from: 345.46,
    current: 32.30,
    perGuest: true,
    cancellation: "Free cancellation",
  },

  // Stay Duration & Calendar - CRITICAL: This was missing!
  stayDuration: {
    nights: 7,
    location: "New York",
    startDate: "Feb 19, 2022",
    endDate: "Feb 26, 2022",
  },

  // Calendar Data - CRITICAL: This was missing!
  calendar: {
    months: [
      {
        name: "February 2022",
        year: 2022,
        month: 1,
        daysInMonth: 28,
        startDay: 2, // Tuesday
        selectedDates: [4, 10],
      },
      {
        name: "March 2022",
        year: 2022,
        month: 2,
        daysInMonth: 31,
        startDay: 2, // Tuesday
        selectedDates: [10],
      },
      {
        name: "April 2022",
        year: 2022,
        month: 3,
        daysInMonth: 30,
        startDay: 5, // Friday
        selectedDates: [],
      },
    ],
  },

  // Review Categories
  reviewCategories: {
    Cleanliness: 5.0,
    Accuracy: 5.0,
    Communication: 5.0,
    Location: 4.9,
    "Check-in": 5.0,
    Value: 4.7,
  },

  // Reviews
  reviews: [
    {
      author: "Jake",
      date: "December 2021",
      avatar: "/api/placeholder/48/48",
      comment: "Host was very attentive.",
    },
    {
      author: "Luke",
      date: "December 2021",
      avatar: "/api/placeholder/48/48",
      comment: "Nice place to stay!",
    },
    {
      author: "Shayna",
      date: "September 2021",
      avatar: "/api/placeholder/48/48",
      comment: "Wonderful neighborhood, easy access to restaurants and the subway, cozy studio apartment with a super comfortable bed. Great host, super helpful and responsive. Cool murphy bed...",
    },
    {
      author: "Josh",
      date: "November 2021",
      avatar: "/api/placeholder/48/48",
      comment: "Well designed and fun space, neighborhood has lots of energy and amenities.",
    },
    {
      author: "Vladko",
      date: "November 2020",
      avatar: "/api/placeholder/48/48",
      comment: "This is amazing place. It has everything one needs for a monthly business stay. Very clean and organized place. Amazing hospitality affordable price.",
    },
    {
      author: "Jennifer",
      date: "January 2021",
      avatar: "/api/placeholder/48/48",
      comment: "A centric place, near of a sub station and a supermarket with everything you need.",
    },
  ],
  totalReviews: 12,

  // House Rules
  houseRules: [
    "Check-in: After 4:00 PM",
    "Checkout: 11:00 AM",
    "Self check-in with lockbox",
    "Not suitable for infants (under 2 years)",
    "No smoking",
    "No pets",
    "No parties or events",
  ],

  // Health & Safety
  healthSafety: [
    "Committed to Airbnb's enhanced cleaning process",
    "Airbnb's social-distancing and other COVID-19-related guidelines apply",
    "Carbon monoxide alarm",
    "Smoke alarm",
    "Security Deposit - If you damage the home, you may be charged up to $566",
  ],

  // Map Location
  mapLocation: {
    city: "Bordeaux, Nouvelle-Aquitaine, France",
    description: "Very dynamic and appreciated district by the people of Bordeaux thanks to rue St James and place Fernand Lafargue. Home to many historical monuments such as the Grosse Cloche, the Porte de Bourgogne and the Porte Cailhau and cultural sites such as the Aquitaine Museum.",
    coordinates: { lat: 44.837789, lng: -0.57918 },
  },
};

// Multiple islands data (for search/listing pages)
export const islandsData = [
  islandDetailData,
  {
    id: 2,
    title: "Luxury Beach Villa",
    location: "Nassau, Bahamas",
    images: ["/assets/island2.jpg", "/assets/island3.jpg"],
    price: { original: 450.00, current: 250.00 },
    rating: 4.8,
    reviewCount: 15,
    details: { guests: 6, bedrooms: 3, beds: 4, bathrooms: 2 },
  },
  {
    id: 3,
    title: "Cozy Island Cottage",
    location: "Exuma, Bahamas",
    images: ["/assets/island3.jpg", "/assets/island4.jpg"],
    price: { original: 180.00, current: 120.00 },
    rating: 4.9,
    reviewCount: 20,
    details: { guests: 4, bedrooms: 2, beds: 2, bathrooms: 1 },
  },
];

// Helper functions
export const getIslandById = (id) => {
  return islandsData.find((island) => island.id === parseInt(id)) || islandDetailData;
};

export const getIslandsByLocation = (location) => {
  return islandsData.filter((island) => 
    island.location.toLowerCase().includes(location.toLowerCase())
  );
};

export const getIslandsByCategory = (category) => {
  return islandsData.filter((island) => island.category === category);
};