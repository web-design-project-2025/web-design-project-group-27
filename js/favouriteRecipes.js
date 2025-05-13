document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("favourites-container");

  if (!container) {
    console.error("Missing container with ID 'favourites-container'");
    return;
  }

  let favourites = JSON.parse(localStorage.getItem("favouriteRecipes")) || [];

  if (favourites.length === 0) {
    container.innerHTML = "<p>No favourite recipes yet.</p>";
    return;
  }

  favourites.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.classList.add("favourite-card");

    card.innerHTML = `
      <a href="${recipe.page}">
        <img src="${recipe.image}" alt="${recipe.name}" class="favourite-image"/>
        <h3>${recipe.name}</h3>
      </a>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;

    container.appendChild(card);
  });

  // Add event listeners for remove buttons
  container.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
      const index = parseInt(e.target.getAttribute("data-index"), 10);
      favourites.splice(index, 1); // remove from array
      localStorage.setItem("favouriteRecipes", JSON.stringify(favourites)); // update storage
      location.reload(); // reload page to update view
    }
  });
});
