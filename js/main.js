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
  { name: "Butter Chicken", URL: "butterchicken.html" },
  { name: "Pasta Bolognese", URL: "bolognes.html" },
  { name: "Mac & Cheese", URL: "macandcheese.html" },
  { name: "Beef & Broccoli", URL: "beefandbroccoli.html" },
  { name: "Blood Pudding", URL: "bloodpudding.html" },
  { name: "Greek Sallad", URL: "greeksallad.html" },
  { name: "Briam", URL: "briam.html" },
  { name: "Buffalo Wings", URL: "buffalo.html" },
  { name: "Burger", URL: "burger.html" },
  { name: "Calzone", URL: "calzone.html" },
  { name: "Carbonara", URL: "carbonara.html" },
  { name: "Chicken Cashew", URL: "cashwe.html" },
  { name: "Casserole", URL: "casserole.html" },
  { name: "Chana Masala", URL: "chana.html" },
  { name: "Dopiaza", URL: "dopiaza.html" },
  { name: "Falu Sausage", URL: "falu.html" },
  { name: "Fesenjoon", URL: "fesenjoon.html" },
  { name: "Fried Rice", URL: "friedrice.html" },
  { name: "Gheime Bademjan", URL: "gheimebademjan.html" },
  { name: "Ghorme Sabzi", URL: "ghormesabzi.html" },
  { name: "Kalops", URL: "kalops.html" },
  { name: "Korma", URL: "korma.html" },
  { name: "Lubia Polo", URL: "lubiapolo.html" },
  { name: "Mac & Cheese", URL: "macandcheese.html" },
  { name: "Chicken Masala", URL: "masala.html" },
  { name: "Meatballs", URL: "meatballs.html" },
  { name: "Moussaka", URL: "moussaka.html" },
  { name: "Nasi Goreng", URL: "nasigoreng.html" },
  { name: "Pad Thai", URL: "padthai.html" },
  { name: "Palak Paneer", URL: "palak.html" },
  { name: "Pepperoni Pizza", URL: "pepperoni.html" },
  { name: "Pickled Herring", URL: "pickledherring.html" },
  { name: "Polo Ba Morgh", URL: "polobamorgh.html" },
  { name: "Pomodoro", URL: "pomodoro.html" },
  { name: "Ribs", URL: "ribs.html" },
  { name: "Sandwich Cake", URL: "sadwichcake.html" },
  { name: "Souvlaki", URL: "souvlaki.html" },
  { name: "Spring Rolls", URL: "springrolls.html" },
  { name: "Stiftado", URL: "stiftado.html" },
  { name: "Tacos", URL: "tacos.html" },
  { name: "Tahchin Morgh", URL: "tahchinmorgh.html" },
  { name: "Vesuvio", URL: "vesuvio.html" },
];

/* serarch box */
const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

function display(result) {
  const content = result.map((recipe) => {
    return `<ul class="search-result" data-url="${recipe.URL}">${recipe.name}</ul>`;
  });
  resultBox.innerHTML = "<li>" + content.join("") + "</li>";

  document.querySelectorAll(".search-result").forEach((item) => {
    item.addEventListener("click", () => {
      inputBox.value = item.textContent;
      resultBox.innerHTML = "";
      window.location.href = item.getAttribute("data-url");
    });
  });
}

if (inputBox) {
  inputBox.onkeyup = function () {
    let input = inputBox.value;
    if (input.length) {
      let result = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(input.toLowerCase())
      );
      display(result);
    } else {
      resultBox.innerHTML = "";
    }
  };
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";

  const targetURL = list.getAttribute("data-url");
  if (targetURL) {
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
