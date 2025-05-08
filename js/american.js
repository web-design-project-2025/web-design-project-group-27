fetch("data/american.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("americanFoodContainer");

    data.foods.forEach((food) => {
      const card = document.createElement("div");
      card.className = "american-food-card";

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

document.addEventListener("DOMContentLoaded", function () {
  const triviaElement = document.getElementById("foodTrivia");

  const apiKey = "d0d7d273165e4880b29e660da1da3337";
  const url = `https://api.spoonacular.com/food/trivia/random?apiKey=${apiKey}`;

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .then(function (data) {
      triviaElement.textContent = data.text;
    })
    .catch(function (error) {
      console.error("Error fetching trivia:", error);
      triviaElement.textContent = "Could not load trivia at the moment.";
    });
});
