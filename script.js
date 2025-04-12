document.addEventListener("DOMContentLoaded", () => {
    
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const list = document.getElementById('accommodation-list');
            list.innerHTML = ''; 

            if (!data.accommodations || data.accommodations.length === 0) {
                list.innerHTML = '<p>No accommodations found.</p>';
                return;
            }

            data.accommodations.forEach(accommodation => {
                const div = document.createElement('div');
                div.className = 'accommodation-card';

                let imgSrc = accommodation.image && accommodation.image.trim() !== "" 
                    ? accommodation.image 
                    : 'assets/images/noronha2.jpeg';

                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = accommodation.name;
                img.onerror = function() {
                    this.onerror = null;
                    this.src = 'assets/images/torres_paine.jpg';
                };

                const title = document.createElement('h3');
                title.textContent = accommodation.name;

                const desc = document.createElement('p');
                desc.textContent = accommodation.description || 'No description available.';

                div.appendChild(img);
                div.appendChild(title);
                div.appendChild(desc);

                list.appendChild(div);
            });
        })
        .catch(error => {
            console.error("Error fetching accommodations:", error);
            document.getElementById('accommodation-list').innerHTML = '<p>Error loading accommodations. Please try again later.</p>';
        });

    // ✅ Hamburger menu code
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    } else {
        console.error("Erro: Menu items not found.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const filterSelect = document.getElementById("experience-filter");
    const cards = document.querySelectorAll(".experience-card");
  
    filterSelect.addEventListener("change", function () {
      const selected = this.value;
  
      cards.forEach((card) => {
        const category = card.dataset.category;
  
        if (selected === "all" || category === selected) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
  