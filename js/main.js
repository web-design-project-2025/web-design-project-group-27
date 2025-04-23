fetch("data/categories.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("categoryContainer");

    data.categories.forEach((category) => {
      const card = document.createElement("div");
      card.className = "category-card";

      const img = document.createElement("img");
      img.src = category.image;
      img.alt = category.name;

      const title = document.createElement("h3");
      title.textContent = category.name;

      card.appendChild(img);
      card.appendChild(title);
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error loading categories:", error);
  });
 