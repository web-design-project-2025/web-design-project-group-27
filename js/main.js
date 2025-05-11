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
    });
  })
  .catch((error) => {
    console.error("Error loading categories:", error);
  });

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

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);

  if (!result.length) {
    resultBox.innerHTML = "";
  }
};

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

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  if (!id) return showError("No recipe specified.");

  fetch("data/recipes.json")
    .then((res) => res.json())
    .then((recipes) => {
      const r = recipes.find((x) => x.id === id);
      if (!r) return showError("Recipe not found.");

      // Populate text
      document.getElementById("recipe-title").textContent = r.title;
      document.getElementById("recipe-description").textContent = r.description;
      document.getElementById("recipe-time").textContent = r.time;
      document.getElementById("recipe-image").src = r.image;
      document.getElementById("recipe-image").alt = r.title;

      // Ingredients
      const ulIng = document.getElementById("ingredients-list");
      r.ingredients.forEach((i) => {
        const li = document.createElement("li");
        li.textContent = i;
        ulIng.appendChild(li);
      });

      // Instructions
      const olInst = document.getElementById("instructions-list");
      r.instructions.forEach((step) => {
        const li = document.createElement("li");
        li.textContent = step;
        olInst.appendChild(li);
      });

      // Favorites button (reuse your existing handler)
      const favBtn = document.getElementById("favorite-btn");
      favBtn.addEventListener("click", () => toggleFavorite(r.id));
    })
    .catch(() => showError("Could not load recipes."));
});

function showError(msg) {
  document.querySelector("main").innerHTML = `<p class="error">${msg}</p>`;
}
