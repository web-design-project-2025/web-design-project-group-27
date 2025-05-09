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
  { name: "Chicken Tikka Massala", URL: "masala.html" },
  { name: "Korma", URL: "korma.html" },
  { name: "Butter Chicken", URL: "butterchicken.html" },
  { name: "Chana Massala", URL: "chana.html" },
  { name: "Palak Paneer", URL: "palak.html" },
  { name: "Pasta Bolognese", URL: "bolognes.html" },
  { name: "Pasta Carbonara", URL: "carbonara" },
  { name: "Pasta Pomdoro", URL: "pomdoro.html" },
  { name: "Pepperoni Pizza", URL: "pepperoni.html" },
  { name: "Calzone", URL: "calzone.html" },
  { name: "Vesuvio Pizza", URL: "vesuvio.html" },
  { name: "Ribs", URL: "ribs.html" },
  { name: "Burger", URL: "burger.html" },
  { name: "Mac & Cheese", URL: "macandchees.html" },
  { name: "Casserole", URL: "casserole.html" },
  { name: "Tacos", URL: "tacos.html" },
  { name: "Buffalo Wings", URL: "buffalo.html" },
  { name: "Chicken Fried Rice", URL: "friedrice.html" },
  { name: "Chicken Cashew", URL: "cashwe.html" },
  { name: "Pad Thai", URL: "padthai.html" },
  { name: "Nasi Goreng", URL: "nasigoreng.html" },
  { name: "Beef & Broccoli", URL: "beefandbroccoli.html" },
  { name: "Spring Rolls", URL: "springrolls.html" },
  { name: "Meatballs", URL: "meatballs.html" },
  { name: "Falu Sausage", URL: "falu.html" },
  { name: "Blood Pudding", URL: "bloodpudding.html" },
  { name: "Kalops", URL: "kalops.html" },
  { name: "Pickled Herring", URL: "pickledherring.html" },
  { name: "Sandwich Cake", URL: "sandwichcake.html" },
  { name: "Ghorme Sabzi(stew with rice)", URL: "ghormesabzi.html" },
  { name: "Gheime Bademjan(stew with rice", URL: "gheimebademjan.html" },
  { name: "Tahchin Morgh", URL: "tahchinmorgh.html" },
  { name: "Zereshk Polo Ba Morgh", URL: "polobamorgh.html" },
  { name: "Fesenjoon", URL: "fesenjoon.html" },
  { name: "Lubia Polo", URL: "lubiapolo.html" },
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
