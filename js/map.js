document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
  
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  });
  

// Inicializa o mapa
const map = L.map('map').setView([-15.77972, -47.92972], 3);

// Mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Itinerários com múltiplos destinos
const exampleItineraries = ["Bali", "Patagonia", "Amsterdam", "Costa Rica", "Kyoto", "Lisbon", "Banff", "Cape Town", "Queenstown", "Reykjavik"];

// Adiciona marcadores de todos os destinos de todos os itinerários
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


  