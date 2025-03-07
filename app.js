const products = [
    // Electronics
    {
      name: "Wireless Mouse",
      price: 25.99,
      category: "Electronics",
      brand: "Logitech",
    },
    {
      name: "Smartphone",
      price: 699.99,
      category: "Electronics",
      brand: "Samsung",
    },
    {
      name: "LED Monitor",
      price: 129.99,
      category: "Electronics",
      brand: "Dell",
    },
    {
      name: "Bluetooth Speaker",
      price: 45.99,
      category: "Electronics",
      brand: "JBL",
    },
    {
      name: "Laptop",
      price: 999.99,
      category: "Electronics",
      brand: "Apple",
    },
  
    // Footwear
    {
      name: "Running Shoes",
      price: 59.99,
      category: "Footwear",
      brand: "Nike",
    },
    {
      name: "Sneakers",
      price: 75.99,
      category: "Footwear",
      brand: "Adidas",
    },
    {
      name: "Sandals",
      price: 25.99,
      category: "Footwear",
      brand: "Teva",
    },
    {
      name: "Formal Shoes",
      price: 120.0,
      category: "Footwear",
      brand: "Clarks",
    },
    {
      name: "Boots",
      price: 150.0,
      category: "Footwear",
      brand: "Timberland",
    },
  
    // Home Appliances
    {
      name: "Blender",
      price: 34.99,
      category: "Home Appliances",
      brand: "Oster",
    },
    {
      name: "Microwave Oven",
      price: 99.99,
      category: "Home Appliances",
      brand: "Panasonic",
    },
    {
      name: "Air Conditioner",
      price: 299.99,
      category: "Home Appliances",
      brand: "LG",
    },
    {
      name: "Vacuum Cleaner",
      price: 149.99,
      category: "Home Appliances",
      brand: "Dyson",
    },
    {
      name: "Toaster",
      price: 29.99,
      category: "Home Appliances",
      brand: "Breville",
    },
  
    // Stationery
    {
      name: "Notebook",
      price: 3.99,
      category: "Stationery",
      brand: "Moleskine",
    },
    {
      name: "Pen Set",
      price: 12.99,
      category: "Stationery",
      brand: "Parker",
    },
    {
      name: "Highlighters",
      price: 5.99,
      category: "Stationery",
      brand: "Sharpie",
    },
    {
      name: "Stapler",
      price: 7.99,
      category: "Stationery",
      brand: "Swingline",
    },
    {
      name: "Planner",
      price: 14.99,
      category: "Stationery",
      brand: "Erin Condren",
    },
  
    // Furniture
    {
      name: "Desk Chair",
      price: 89.99,
      category: "Furniture",
      brand: "Ikea",
    },
    {
      name: "Coffee Table",
      price: 129.99,
      category: "Furniture",
      brand: "West Elm",
    },
    {
      name: "Sofa",
      price: 499.99,
      category: "Furniture",
      brand: "Ashley Furniture",
    },
    {
      name: "Bookshelf",
      price: 79.99,
      category: "Furniture",
      brand: "Sauder",
    },
    {
      name: "Dining Table",
      price: 399.99,
      category: "Furniture",
      brand: "Pottery Barn",
    },
  
    // Fitness
    {
      name: "Yoga Mat",
      price: 19.99,
      category: "Fitness",
      brand: "Gaiam",
    },
    {
      name: "Dumbbells",
      price: 49.99,
      category: "Fitness",
      brand: "Bowflex",
    },
    {
      name: "Treadmill",
      price: 699.99,
      category: "Fitness",
      brand: "NordicTrack",
    },
    {
      name: "Resistance Bands",
      price: 14.99,
      category: "Fitness",
      brand: "Fit Simplify",
    },
    {
      name: "Exercise Bike",
      price: 299.99,
      category: "Fitness",
      brand: "Peloton",
    },
  
    // Kitchen Appliances
    {
      name: "Coffee Maker",
      price: 49.99,
      category: "Kitchen Appliances",
      brand: "Keurig",
    },
    {
      name: "Air Fryer",
      price: 89.99,
      category: "Kitchen Appliances",
      brand: "Ninja",
    },
    {
      name: "Stand Mixer",
      price: 199.99,
      category: "Kitchen Appliances",
      brand: "KitchenAid",
    },
    {
      name: "Refrigerator",
      price: 799.99,
      category: "Kitchen Appliances",
      brand: "Whirlpool",
    },
    {
      name: "Dishwasher",
      price: 399.99,
      category: "Kitchen Appliances",
      brand: "Bosch",
    },
  ];
  const div = document.querySelector("#div");
  
  products.map((items)=>{
      div.innerHTML += `<h4>Item Name: ${items.brand + "" + items.name} </h4>
      <h4> Category: ${items.category}</h4>
      <h4> Price: ${items.price}</h4>
      <hr/>`;
  })
  
  function filtered(btn){
      div.innerHTML=""
     let filteredItems= products.filter((items)=>items.category===btn.innerHTML).map((items)=>{
        div.innerHTML += `<h3> Item Name: ${items.brand + "" + items.name} </h3>
      <h3> Category: ${items.category}</h3>
      <h3> Price: ${items.price}</h3>
      <hr/>`;
  
     })
  }
  
  
  
  
  
  
  