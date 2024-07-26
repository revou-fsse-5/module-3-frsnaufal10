// DOM elements
const getRecipeBtn = document.getElementById('getRecipeBtn');
const recipeContainer = document.getElementById('recipeContainer');

// Recipe yang akan ditampilkan
const recipe = {
  title: "Spaghetti Carbonara",
  instructions:
    "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.",
  image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
};

// Function untuk menampilkan recipe
function displayRecipe() {
  // Clear previous recipe details
  recipeContainer.innerHTML = '';

  // HTML Elements untuk Recipe
  const recipeTitle = document.createElement('h2');
  recipeTitle.classList.add('recipe-title');
  recipeTitle.textContent = recipe.title;

  const recipeInstructions = document.createElement('p');
  recipeInstructions.classList.add('recipe-instructions');
  recipeInstructions.textContent = recipe.instructions;

  const recipeImage = document.createElement('img');
  recipeImage.classList.add('recipe-image');
  recipeImage.src = recipe.image;
  recipeImage.alt = recipe.title;

  // Masukkan HTML Elements di atas ke id recipeContainer
  recipeContainer.appendChild(recipeTitle);
  recipeContainer.appendChild(recipeImage);
  recipeContainer.appendChild(recipeInstructions);
}

// Event Listener Click sebagai trigger
getRecipeBtn.addEventListener('click', displayRecipe);
