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

/* window.location.href = category.page;
 */
let recipes = [
  "Chicken Tikka Massala",
  "Korma",
  "Butter Chicken",
  "Chana Massala",
  "Palak Paneer",
  "Pasta Bolognese",
  "Pasta Carbonara",
  "Pasta Pomdoro",
  "Pepperoni Pizza",
  "Calzone",
  "Vesuvio Pizza",
  "Ribs",
  "Burger",
  "Mac & Cheese",
  "Casserole",
  "Tacos",
  "Buffalo Wings",
  "Chicken Fried Rice",
  "Chicken Cashew",
  "Pad Thai",
  "Nasi Goreng",
  "Beef & Broccoli",
  "Spring Rolls",
  "Meatballs",
  "Falu Sausage",
  "Blood Pudding",
  "Kalops",
  "Pickled Herring",
  "Sandwich Cake",
  "Ghorme Sabzi(stew with rice)",
  "Gheime Bademjan(stew with rice",
  "Tahchin Morgh",
  "Zereshk Polo Ba Morgh",
  "Fesenjoon",
  "Lubia Polo",
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = recipes.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);

  if (!result.length) {
    resultBox.innerHTML = "";
  }
};

function display(result) {
  const content = result.map((list) => {
    return "<li onclick = selectInput(this)>" + list + "</li>";
  });

  resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}
