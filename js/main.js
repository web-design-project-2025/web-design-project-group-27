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
