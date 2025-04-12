const exampleItineraries = {
    "Bali": [
      { day: 1, activity: "Check-in at Green Village Bali" },
      { day: 2, activity: "Organic farm visit + bamboo bike tour" },
      { day: 3, activity: "Eco-friendly beach cleanup and surf" },
    ],
    "Patagonia": [
      { day: 1, activity: "Arrive at Torres Patagonia Camp" },
      { day: 2, activity: "Hiking sustainable trails" },
      { day: 3, activity: "Kayaking and wildlife observation" },
    ],
    "Amsterdam": [
    { day: 1, activity: "Stay at a certified eco-hotel" },
    { day: 2, activity: "Visit the Ecoducts + bike tour through Vondelpark" },
    { day: 3, activity: "Plant-based food tour + canal clean-up experience"},
    ],
    "Costa Rica": [
    { day: 1, activity: "Check-in at eco-lodge in Monteverde" },
    { day: 2, activity: "Canopy zip-line + sustainable coffee farm visit" },
    { day: 3, activity: "Wildlife rescue center + night jungle tour" },
    ],
    "Kyoto": [
    { day: 1, activity: "Stay at traditional ryokan with green certification" },
    { day: 2, activity: "Temple visits + walk through Arashiyama Bamboo Grove" },
    { day: 3, activity: "Volunteer in local permaculture garden" },
    ],
    "Lisbon": [
    { day: 1, activity: "Stay in eco-hotel with solar panels" },
    { day: 2, activity: "Bike tour through Alfama + plastic-free shopping" },
    { day: 3, activity: "Beach clean-up at Costa da Caparica + surf lesson" },
    ],
    "Banff": [
    { day: 1, activity: "Arrival at eco-resort in Banff National Park" },
    { day: 2, activity: "Guided wildlife hike + glacier education tour" },
    { day: 3, activity: "Canoe trip + sustainability workshop at the visitor center" },
    ],
    "Cape Town": [
    { day: 1, activity: "Stay in green guesthouse near Table Mountain" },
    { day: 2, activity: "Visit local farm-to-table market + township garden tour" },
    { day: 3, activity: "Kayak with penguins + beach clean-up at Boulders Beach" },
    ],
    "Queenstown": [
    { day: 1, activity: "Check-in at sustainable backpacker lodge" },
    { day: 2, activity: "Eco jet boating + local organic vineyard tour" },
    { day: 3, activity: "Day hike with Leave No Trace principles" },
    ],
    "Reykjavik": [
    { day: 1, activity: "Stay at geothermal-powered hotel" },
    { day: 2, activity: "Golden Circle tour with eco-transport" },
    { day: 3, activity: "Whale-watching with responsible operators" },
    ]
};
  
  function generateItinerary() {
    const dest = document.getElementById("destination").value.trim();
    const results = document.getElementById("itineraryResults");
    results.innerHTML = "";
  
    if (!dest || !exampleItineraries[dest]) {
      results.innerHTML = `<p>No itinerary available for "${dest}". Try Bali or Patagonia.</p>`;
      return;
    }
  
    const itinerary = exampleItineraries[dest];
    const list = document.createElement("ul");
  
    itinerary.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `Day ${item.day}: ${item.activity}`;
      list.appendChild(li);
    });
  
    results.innerHTML = `<h2>${dest} Sustainable Itinerary</h2>`;
    results.appendChild(list);
  }
 

  function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('show');
  }

