// Get references to the button and the container for recipe details
var getRecipeButton = document.getElementById('getRecipeBtn');
var recipeDisplayContainer = document.getElementById('recipeContainer');
var carouselContainer = document.getElementById('carouselContainer');

// Function to fetch a random recipe from TheMealDB API
async function fetchRandomRecipe() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const recipe = data.meals[0];
    displayRecipe(recipe);
  } catch (error) {
    console.error('Fetch error: ', error);
    recipeDisplayContainer.innerHTML = '<p>Failed to load recipe. Please try again later.</p>';
  }
}

// Function to display the recipe details on the page
function displayRecipe(recipe) {
  // Hide the carousel container
  carouselContainer.style.display = 'none';

  // Clear previous recipe details
  recipeDisplayContainer.innerHTML = '';

  // Create and append elements for the recipe
  var titleElement = document.createElement('h2');
  titleElement.classList.add('recipe-title');
  titleElement.textContent = recipe.strMeal;
  recipeDisplayContainer.appendChild(titleElement);

  var imageElement = document.createElement('img');
  imageElement.classList.add('recipe-image');
  imageElement.src = recipe.strMealThumb;
  imageElement.alt = recipe.strMeal;
  recipeDisplayContainer.appendChild(imageElement);

  var instructionsElement = document.createElement('p');
  instructionsElement.classList.add('recipe-instructions');
  instructionsElement.textContent = recipe.strInstructions;
  recipeDisplayContainer.appendChild(instructionsElement);

  // Create and append a list for ingredients
  var ingredientsElement = document.createElement('ul');
  ingredientsElement.classList.add('recipe-ingredients');
  for (var i = 1; i <= 20; i++) {
    var ingredient = recipe['strIngredient' + i];
    var measure = recipe['strMeasure' + i];
    if (ingredient) {
      var listItem = document.createElement('li');
      listItem.textContent = measure + ' ' + ingredient;
      ingredientsElement.appendChild(listItem);
    }
  }
  recipeDisplayContainer.appendChild(ingredientsElement);
}

// Add event listener to the button
getRecipeButton.addEventListener('click', fetchRandomRecipe);
