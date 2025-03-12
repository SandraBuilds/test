const recipes = [
  {
      id: 1,
"name": "Classic Magarita",
"image": "drinks/Classic Margarita.jpg",
"ingredients": [
  "2 oz Tequila",
  "1 oz Lime Juice",
  "1 oz triple sec",
  "Salt for rimming glass",
  "Lime wedge for garnish"
],
"instructions": [
  "Rim the glass with salt",
  "Add all ingredients to a shaker with ice",
  "Shake and strain into glass",
  "Garnish with lime wedge"
]
},
{
  id: 2,
"name": "Blue Lagoon",
"image": "drinks/Blue Lagoon.jpg",
"ingredients": [
  "1 oz Vodka",
  "1 oz Blue Curacao",
  "Lemonade",
  "Lemon wedge for garnish"
],
"instructions": [
  "Add vodka and blue curacao to a glass with ice",
  "Top with lemonade",
  "Garnish with lemon wedge"
]
},
{
  id: 3,
"name": "Virgin Mojito",
"image": "drinks/Virgin Mojito.jpg",
"ingredients": [
  "1 oz Lime Juice",
  "1 oz Simple Syrup",
  "Mint Leaves",
  "Soda Water"
],
"instructions": [
  "Muddle mint leaves with lime juice and simple syrup",
  "Add ice and top with soda water"
]
},
{
  id: 4,
"name": "Espresso Martini",
"image": "drinks/Espresso Martini.jpg",
"ingredients": [
  "1 oz Vodka",
  "1 oz Kahlua",
  "1 oz Espresso",
  "Coffee beans for garnish"
],
"instructions": [
  "Add all ingredients to a shaker with ice",
  "Shake and strain into glass",
  "Garnish with coffee beans"
]
},
{
  id: 5,
"name": "Mango Lassi",
"image": "drinks/Mango Lassi.jpg",
"ingredients": [
  "1 cup Mango",
  "1 cup Yogurt",
  "1/2 cup Milk",
  "2 tbsp Sugar",
  "Cardamom for garnish"
],
"instructions": [
  "Blend all ingredients together",
  "Garnish with cardamom"
]
},
{
  id: 6,
"name": "Pina Colada",
"image": "drinks/Pina Colada.jpg",
"ingredients": [
  "2 oz White Rum",
  "2 oz Coconut Cream",
  "4 oz Pineapple Juice",
  "Pineapple wedge for garnish"
],
"instructions": [
  "Add all ingredients to a blender with ice",
  "Blend until smooth",
  "Pour into glass and garnish with pineapple wedge"
]
},
{
  id: 7,
"name": "Classic Negroni",
"image": "drinks/Classic Negroni.jpg",
"ingredients": [
  "1 oz Gin",
  "1 oz Campari",
  "1 oz Sweet Vermouth",
  "Orange twist for garnish"
],
"instructions": [
  "Add all ingredients to a glass with ice",
  "Stir and garnish with orange twist"
]
},
{
  id: 8,
"name": "Matcha Latte",
"image": "drinks/Matcha Latte.jpg",
"ingredients": [
  "1 tsp Matcha Powder",
  "1 cup Milk",
  "1 tbsp Honey",
  "Matcha powder for garnish"
],
"instructions": [
  "Whisk matcha powder with a little hot water",
  "Heat milk and honey",
  "Add matcha mixture to milk",
  "Garnish with matcha powder"
]
},
{
  id: 9,
"name": "Shirley Temple",
"image": "drinks/Shirley Temple.jpg",
"ingredients": [
  "1 oz Grenadine",
  "4 oz Ginger Ale",
  "Maraschino cherry for garnish"
],
"instructions": [
  "Add grenadine to a glass with ice",
  "Top with ginger ale",
  "Garnish with maraschino cherry"
]
},
{
  id: 10,
"name": "Spicy Magarita",
"image": "drinks/Spicy Margarita.jpg",
"ingredients": [
  "2 oz Tequila",
  "1 oz Lime",
  "1 oz Triple Sec",
  "Jalapeno slices"
],
"instructions": [
  "Muddle jalapeno slices with lime juice",
  "Add tequila and triple sec to a shaker with ice",
  "Shake and strain into glass"
]
},
{
  id: 11,
"name": "Honey Lemon Ginger Tea",
"image": "drinks/Honey Lemon Ginger Tea.jpg",
"ingredients": [
  "1 cup Water",
  "1 tbsp Honey",
  "1 tbsp Lemon Juice",
  "1 tsp Ginger",
  "Lemon slice for garnish"
],
"instructions": [
  "Boil water with ginger",
  "Add honey and lemon juice",
  "Strain and serve with lemon slice"
]
},
{
  id: 12,
"name": "Watermelon Cooler",
"image": "drinks/Watermelon Cooler.jpg",
"ingredients": [
  "2 cups Watermelon",
  "1 cup Coconut Water",
  "1 tbsp Lime Juice",
  "Mint leaves for garnish"
],
"instructions": [
  "Blend watermelon and coconut water",
  "Add lime juice and stir",
  "Garnish with mint leaves"
]
},
{
  id: 13,
"name": "Classic Martini",
"image": "drinks/Classic Martini.jpg",
"ingredients": [
  "2 oz Gin",
  "1 oz Dry Vermouth",
  "Olive for garnish"
],
"instructions": [
  "Add gin and vermouth to a glass with ice",
  "Stir and strain into glass",
  "Garnish with olive"
]
},
{
  id: 14,
"name": "Thai Iced Tea",
"image": "drinks/Thai Iced Tea.jpg",
"ingredients": [
  "1 cup Black Tea",
  "1/2 cup Sweetened Condensed Milk",
  "1/2 cup Evaporated Milk",
  "Ice"
],
"instructions": [
  "Brew black tea and let cool",
  "Add condensed milk to glass",
  "Pour tea over condensed milk",
  "Top with evaporated milk and ice"
]
},
{
  id: 15,
"name": "Strawberry Lemonade",
"image": "drinks/Strawberry Lemonade.jpg",
"ingredients": [
  "1 cup Strawberries",
  "1 cup Lemon Juice",
  "1 cup Sugar",
  "4 cups Water",
  "Lemon slice for garnish"
],
"instructions": [
  "Blend strawberries, lemon juice, and sugar",
  "Add water and stir",
  "Serve with lemon slice"
]
}
]

/**
* Displays the list of recipes.
* @param {Array} recipes - The array of recipe objects.
*/
function displayRecipes(recipes) {
  const container = document.getElementById("recipe-container");
  if (!container) return;

  container.innerHTML = ""; // Clear existing content

  recipes.forEach(recipe => {
      // Create recipe card
      const card = document.createElement("div");
      card.className = "recipe-card";

      // Add recipe image with a link
      const link = document.createElement("a");
      link.href = `drinks1.html?id=${recipe.id}`;

      const image = document.createElement("img");
      image.src = recipe.image;
      image.alt = recipe.name;
      image.className = "recipe-image";

      link.appendChild(image);
      card.appendChild(link);

      // Add recipe name
      const title = document.createElement("p");
      title.className = "recipe-title";
      title.textContent = recipe.name;
      card.appendChild(title);

      // Append card to container
      container.appendChild(card);
  });
}
 

/**
* Retrieves a recipe by ID from the URL.
* @param {Array} recipes - The array of recipe objects.
* @returns {Object|null} - The matched recipe or null if not found.
*/
function getRecipeFromUrl(recipes) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  return recipes.find(recipe => recipe.id === id) || null;
}

/**
* Displays the details of a single recipe.
* @param {Object} recipe - The recipe object to display.
*/
function displayRecipeDetails(recipe) {
  const detailContainer = document.getElementById("recipe-detail");
  if (!detailContainer) return;

  detailContainer.innerHTML = ""; // Clear existing content

  // Create title
  const title = document.createElement("h1");
  title.textContent = recipe.name;

  // Create image
  const image = document.createElement("img");
  image.src = recipe.image;
  image.alt = recipe.name;
  image.className = "detail-image";

  // Create ingredients section
  const ingredientsHeader = document.createElement("h2");
  ingredientsHeader.textContent = "Ingredients";
  const ingredientsList = document.createElement("ul");
  recipe.ingredients.forEach(ingredient => {
      const listItem = document.createElement("li");
      listItem.textContent = ingredient;
      ingredientsList.appendChild(listItem);
  });

  // Create instructions section
  const instructionsHeader = document.createElement("h2");
  instructionsHeader.textContent = "Instructions";
  const instructions = document.createElement("p");
  instructions.textContent = recipe.instructions.join(" ");

  // Append all elements
  detailContainer.appendChild(title);
  detailContainer.appendChild(image);
  detailContainer.appendChild(ingredientsHeader);
  detailContainer.appendChild(ingredientsList);
  detailContainer.appendChild(instructionsHeader);
  detailContainer.appendChild(instructions);
}

// Initialize event listeners
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("recipe-container")) {
      displayRecipes(recipes); // Display recipe list if on main page
  } else if (document.getElementById("recipe-detail")) {
      const recipe = getRecipeFromUrl(recipes);
      if (recipe) {
          displayRecipeDetails(recipe);
      } else {
          document.getElementById("recipe-detail").textContent = "Recipe not found!";
      }
  }
});
