document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
  
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  });
  

// Initialize the map
const map = L.map('map').setView([-15.77972, -47.92972], 3);

// Mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Multi-destination itineraries
const exampleItineraries = ["Bali", "Patagonia", "Amsterdam", "Costa Rica", "Kyoto", "Lisbon", "Banff", "Cape Town", "Queenstown", "Reykjavik"];

// Add markers for all destinations on all itineraries
exampleItineraries.forEach(itinerary => {
  itinerary.destinations.forEach(destination => {
    const marker = L.marker([destination.latitude, destination.longitude]).addTo(map);
    marker.bindPopup(`
      <strong>${itinerary.title}</strong><br>
      <em>${destination.name}</em><br>
      ${itinerary.description}
    `);
  });
});


  
