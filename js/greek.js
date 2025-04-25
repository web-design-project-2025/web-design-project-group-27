fetch("data/greek.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("greekFoodContainer");

    data.foods.forEach((food) => {
      const card = document.createElement("div");
      card.className = "greek-food-card";

      const img = document.createElement("img");
      img.src = food.image;
      img.alt = food.name;

      const title = document.createElement("h3");
      title.textContent = food.name;

      card.appendChild(img);
      card.appendChild(title);
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error loading Indian foods:", error);
  });
