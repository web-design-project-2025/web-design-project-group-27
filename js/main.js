const categoryContainer = document.getElementById("categoryContainer");
if (categoryContainer) {
  fetch("data/categories.json")
    .then((response) => response.json())
    .then((data) => {
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
        categoryContainer.appendChild(card);

        card.addEventListener("click", () => {
          let pageName =
            category.name
              .toLowerCase()
              .replace(" ", "-")
              .replace("ä", "a")
              .replace("ö", "o") + ".html";

          window.location.href = pageName;
        });
      });
    })
    .catch((error) => {
      console.error("Error loading categories:", error);
    });
}

let recipes = [
  { name: "Butter Chicken", URL: "recipe.html?id=butterchicken" },
  { name: "Pasta Bolognese", URL: "recipe.html?id=bolognes" },
  { name: "Mac & Cheese", URL: "recipe.html?id=macandchees" },
  { name: "Beef & Broccoli", URL: "recipe.html?id=beefandbroccoli" },
  { name: "Blood Pudding", URL: "recipe.html?id=bloodpudding" },
  { name: "Tahchin Morgh", URL: "recipe.html?id=tahchinmorgh" },
  { name: "Greek Sallad", URL: "recipe.html?id=greeksallad" },
];

/* serarch box */
const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

if (inputBox) {
  inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
      result = recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(input.toLowerCase());
      });
    }
    display(result);

    if (!result.length) {
      resultBox.innerHTML = "";
    }
  };
}

function display(result) {
  const content = result.map((recipe) => {
    return `<li onclick="selectInput(this)" data-url="${recipe.url}">${recipe.name}</li>`;
  });

  resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";

  const targetURL = listItem.getAttribute("data-url");
  if (targerUtl) {
    window.location.href = targetURL;
  }
}
fetch("data/popular-recepies.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("popularContainer");

    data["popular recepies"].forEach((recipe) => {
      const card = document.createElement("div");
      card.className = "category-card";

      const img = document.createElement("img");
      img.src = recipe.image;
      img.alt = recipe.name;

      const title = document.createElement("h3");
      title.textContent = recipe.name;

      card.appendChild(img);
      card.appendChild(title);
      container.appendChild(card);

      card.addEventListener("click", () => {
        window.location.href = recipe.page;
      });
    });
  })
  .catch((error) => {
    console.error("Error loading popular recipes:", error);
  });

/* add to favourite */
/* document.addEventListener("DOMContentLoaded", function () {
  const favButton = document.getElementById("favorite-btn");

  if (favButton) {
    favButton.addEventListener("click", function () {
      const imageSrc = document.querySelector(".hero-image img")?.src;
      const title = document.querySelector(".first-text")?.textContent;
      const pageUrl = window.location.href;

      if (!imageSrc || !title) {
        alert("Error: Could not find recipe data.");
        return;
      }

      const favourite = {
        image: imageSrc,
        title: title,
        url: pageUrl,
      };

      let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
      const exists = favourites.some((item) => item.url === pageUrl);
      if (exists) {
        alert("Recipe already in your favourites!");
        return;
      }

      favourites.push(favourite);
      localStorage.setItem("favourites", JSON.stringify(favourites));
      alert("Recipe added to your favourites!");
    });
  }
}); */

document.getElementById("favorite-btn")?.addEventListener("click", () => {
  toggleFavorite();
});
function toggleFavorite(recipeId) {
  // Adjust this to match your recipe page setup
  const image = document.querySelector(".full-width-image")?.src;
  const name = document.querySelector(".first-text")?.textContent;
  const page = window.location.pathname;

  if (!image || !name || !page) {
    alert("Could not save recipe. Missing information.");
    return;
  }

  let favourites = JSON.parse(localStorage.getItem("favouriteRecipes")) || [];

  // Check for duplicates
  const exists = favourites.some((r) => r.page === page);
  if (!exists) {
    favourites.push({ image, name, page });
    localStorage.setItem("favouriteRecipes", JSON.stringify(favourites));
    alert("Recipe added to favourites!");
  } else {
    alert("Recipe is already in favourites.");
  }
}
