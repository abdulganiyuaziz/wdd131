const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/6a9c8c2c6e7f4f7db7fbe9c03f6b77b8.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1919-11-27",
    area: 42100,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/0c5e3a7b0b9b4b5fa4d7c1a25cdbd8a7.jpg"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/9f31f8b77fca4dfbbafc2f9b2df2c8d4.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/1f2d6f4b09f84c72a45b5dc34e94c95e.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/af7d9b0f52d54bdebb5b4dfdbb8b94ae.jpg"
  }
];

const container = document.querySelector("#temples");

function displayTemples(list) {
  container.innerHTML = "";

  list.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.name}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

displayTemples(temples);

// Navigation filtering
document.querySelectorAll("nav button").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    let filtered = temples;

    if (filter === "old") {
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    } else if (filter === "new") {
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    } else if (filter === "large") {
      filtered = temples.filter(t => t.area > 90000);
    } else if (filter === "small") {
      filtered = temples.filter(t => t.area < 10000);
    }

    displayTemples(filtered);
  });
});

// Footer
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
