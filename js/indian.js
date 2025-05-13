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

      card.addEventListener("click", () => {
        let pageName =
          category.name
            .toLowerCase()
            .replace(" ", "-")
            .replace("ä", "a")
            .replace("ö", "o") + ".html";

        if (pageName === "italien-food.html") pageName = "italien-food.html";
        if (pageName === "swedish-food.html") pageName = "swedish-food.html";
        if (pageName === "american-food.html") pageName = "american-food.html";
        if (pageName === "greek-food.html") pageName = "greek-food.html";
        if (pageName === "persian-food.html") pageName = "persian-food.html";
        if (pageName === "asian-food.html") pageName = "asian-food.html";
        if (pageName === "indian-food.html") pageName = "indian-food.html";

        window.location.href = pageName;
      });

      container.appendChild(card);
    });
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

let allFoods = [];

function renderFoods(foods) {
  const container = document.getElementById("indianFoodContainer");
  container.innerHTML = "";

  if (foods.length === 0) {
    container.innerHTML = "<p>No items match your filter.</p>";
    return;
  }

  foods.forEach((food) => {
    const link = document.createElement("a");
    link.href = food.page;

    const img = document.createElement("img");
    img.src = food.image;
    img.alt = food.name;

    link.appendChild(img);

    const card = document.createElement("div");
    card.className = "indian-food-card";

    card.appendChild(link);

    const title = document.createElement("h3");
    title.textContent = food.name;

    card.appendChild(title);
    container.appendChild(card);
  });
}

function getSelectedFilters() {
  const checked = document.querySelectorAll('input[name="filter"]:checked');
  return Array.from(checked).map((checkbox) => checkbox.value);
}

function applyFilter() {
  const selected = getSelectedFilters();

  if (selected.length === 0) {
    renderFoods(allFoods);
  } else {
    const filtered = allFoods.filter((food) => selected.includes(food.type));
    renderFoods(filtered);
  }
}

fetch("data/indian.json")
  .then((response) => response.json())
  .then((data) => {
    allFoods = data.foods;
    renderFoods(allFoods);

    const checkboxes = document.querySelectorAll('input[name="filter"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", applyFilter);
    });
  })
  .catch((error) => {
    console.error("Error loading food items:", error);
  });
