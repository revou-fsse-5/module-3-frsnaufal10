// Get references to the button and the container for recipe details
const getRecipeButton = document.getElementById('getRecipeBtn') as HTMLButtonElement;
const recipeDisplayContainer = document.getElementById('recipeContainer') as HTMLDivElement;
const carouselContainer = document.getElementById('carouselContainer') as HTMLDivElement;

// Define a type for the recipe data
interface Recipe {
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strIngredient1?: string;
  strMeasure1?: string;
  // Add more ingredients and measurements up to 20
  strIngredient2?: string;
  strMeasure2?: string;
  strIngredient3?: string;
  strMeasure3?: string;
  strIngredient4?: string;
  strMeasure4?: string;
  strIngredient5?: string;
  strMeasure5?: string;
  strIngredient6?: string;
  strMeasure6?: string;
  strIngredient7?: string;
  strMeasure7?: string;
  strIngredient8?: string;
  strMeasure8?: string;
  strIngredient9?: string;
  strMeasure9?: string;
  strIngredient10?: string;
  strMeasure10?: string;
  strIngredient11?: string;
  strMeasure11?: string;
  strIngredient12?: string;
  strMeasure12?: string;
  strIngredient13?: string;
  strMeasure13?: string;
  strIngredient14?: string;
  strMeasure14?: string;
  strIngredient15?: string;
  strMeasure15?: string;
  strIngredient16?: string;
  strMeasure16?: string;
  strIngredient17?: string;
  strMeasure17?: string;
  strIngredient18?: string;
  strMeasure18?: string;
  strIngredient19?: string;
  strMeasure19?: string;
  strIngredient20?: string;
  strMeasure20?: string;
}

// Function to fetch a random recipe from TheMealDB API
async function fetchRandomRecipe(): Promise<void> {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const recipe: Recipe = data.meals[0];
    displayRecipe(recipe);
  } catch (error) {
    console.error('Fetch error: ', error);
    recipeDisplayContainer.innerHTML = '<p>Failed to load recipe. Please try again later.</p>';
  }
}

// Function to display the recipe details on the page
function displayRecipe(recipe: Recipe): void {
  // Hide the carousel container
  carouselContainer.style.display = 'none';

  // Clear previous recipe details
  recipeDisplayContainer.innerHTML = '';

  // Create and append elements for the recipe
  const titleElement = document.createElement('h2');
  titleElement.classList.add('recipe-title');
  titleElement.textContent = recipe.strMeal;
  recipeDisplayContainer.appendChild(titleElement);

  const imageElement = document.createElement('img');
  imageElement.classList.add('recipe-image');
  imageElement.src = recipe.strMealThumb;
  imageElement.alt = recipe.strMeal;
  recipeDisplayContainer.appendChild(imageElement);

  const instructionsElement = document.createElement('p');
  instructionsElement.classList.add('recipe-instructions');
  instructionsElement.textContent = recipe.strInstructions;
  recipeDisplayContainer.appendChild(instructionsElement);

  // Create and append a list for ingredients
  const ingredientsElement = document.createElement('ul');
  ingredientsElement.classList.add('recipe-ingredients');
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
    const measure = recipe[`strMeasure${i}` as keyof Recipe];
    if (ingredient) {
      const listItem = document.createElement('li');
      listItem.textContent = `${measure} ${ingredient}`;
      ingredientsElement.appendChild(listItem);
    }
  }
  recipeDisplayContainer.appendChild(ingredientsElement);
}

// Add event listener to the button
getRecipeButton.addEventListener('click', fetchRandomRecipe);
