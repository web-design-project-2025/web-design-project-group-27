
# RIVIA Recipes

A modern and interactive web application for exploring, favouriting, and enjoying delicious international recipes.

## Overview

RIVIA Recipes is a responsive, user-friendly recipe website created as a university project. It allows users to browse various recipes, view step-by-step instructions, and save their favourites for quick access.

Built with HTML, CSS, and JavaScript, the application emphasizes accessibility, functionality, and visual design inspired by modern recipe platforms.

## Features

- Responsive Design  
  Works on desktops, tablets, and mobile devices.

- Add to Favourites  
  Users can click a heart icon to save their favourite recipes, stored locally using localStorage.

- Favourites Page  
  A dedicated page that displays saved recipes in a visually appealing grid, with the ability to remove individual items.

- Search Functionality  
  Real-time recipe suggestions as users type in the search bar.

- Preparation Time & Servings Icons  
  Each recipe includes clear visual indicators for cook time and portions.

- Login Simulation  
  A fun login page animation that displays a personalized welcome message using user input.

- Dark/Light Mode (Optional)  
  Stored in localStorage to persist the user’s preference across sessions.

## Folder Structure

```
RIVIA-Recipes/
│
├── css/
│   ├── main.css
│   ├── recepies.css
│   └── login.css
│
├── js/
│   ├── main.js
│   ├── favouriteRecipes.js
│   └── login.js
│
├── data/
│   ├── recipes.json
│   ├── categories.json
│   └── popular-recepies.json
│
├── img/
│   └── (all images including logos, icons, recipe thumbnails)
│
├── index.html
├── favourite-recipes.html
├── login.html
├── about-us.html
└── README.md
```

## Usage Guidelines

1. Homepage (index.html)  
   Browse food categories, explore featured recipes, or search by name.

2. Recipe Pages  
   View full recipes with images, ingredients, and instructions. Click the heart icon to add them to favourites.

3. Favourites (favourite-recipes.html)  
   View all saved recipes. Click Remove to delete any item from your list.

4. Login (login.html)  
   Fill out your name to see a personalized greeting. (No real authentication)

## How to Run the Project Locally

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/rivia-recipes.git
   ```

2. Open the folder:
   ```
   cd rivia-recipes
   ```

3. Launch index.html in your browser using Live Server or double-click:
   ```
   open index.html
   ```

Note: Ensure that you have all assets and data files in place for full functionality.

## Future Improvements

- User login with authentication
- Backend database for persistent favourite saving
- Better accessibility support (ARIA roles, contrast improvements)
- Recipe submission form for user-generated content

## Authors

- Your Name
- Arad
- Nivin
- Tyra

Developed as part of the Web Development Project course at Jönköping University.
