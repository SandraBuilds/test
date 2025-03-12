const recipes = [
    {
      id:1,
      "name": "Quinoa & Vegetable Stir-Fry",
      "image": "healthy/Quinoa & Vegetable Stir-Fry.png",
      "ingredients": [
        "1 cup quinoa",
        "2 cups water",
        "1 tbsp olive oil",
        "1 bell pepper, sliced",
        "1 zucchini, sliced",
        "1 carrot, julienned",
        "2 cloves garlic, minced",
        "2 tbsp soy sauce",
        "1 tbsp sesame seeds"
      ],
      "instructions": [
        "Rinse quinoa under cold water.",
        "In a pot, bring water to a boil and add quinoa. Reduce heat, cover, and simmer for 15 minutes.",
        "In a large pan, heat olive oil over medium heat.",
        "Add bell pepper, zucchini, carrot, and garlic. Stir-fry for 5-7 minutes.",
        "Add cooked quinoa and soy sauce to the pan. Stir well to combine.",
        "Sprinkle with sesame seeds before serving."
      ],
      "dietary_fact": "High in protein and fiber."
    },
    {
      id:2,
      "name": "Greek Yogurt Parfait",
      "image": "healthy/Greek Yogurt Parfait.png",
      "ingredients": [
        "1 cup Greek yogurt",
        "1/2 cup granola",
        "1/2 cup mixed berries",
        "1 tbsp honey"
      ],
      "instructions": [
        "In a glass or bowl, layer Greek yogurt, granola, and mixed berries.",
        "Drizzle honey on top.",
        "Serve immediately."
      ],
      "dietary_fact": "Rich in probiotics and antioxidants."
    },
    {
      id:3,
      "name": "Avocado Toast with Poached Egg",
      "image": "healthy/Avocado Toast with Poached Egg.jpg",
      "ingredients": [
        "1 slice whole grain bread",
        "1/2 avocado, mashed",
        "1 egg",
        "Salt and pepper to taste",
        "Red pepper flakes (optional)"
      ],
      "instructions": [
        "Toast the bread until golden brown.",
        "Spread mashed avocado on the toast.",
        "Bring a pot of water to a simmer and poach the egg for 3-4 minutes.",
        "Place the poached egg on top of the avocado toast.",
        "Season with salt, pepper, and red pepper flakes if desired."
      ],
      "dietary_fact": "High in healthy fats and protein."
    },
    {
      id:4,
      "name": "Vegetable Lentil Soup",
      "image": "healthy/Vegetable Lentil Soup.png",
      "ingredients": [
        "1 cup lentils",
        "1 onion, chopped",
        "2 carrots, chopped",
        "2 celery stalks, chopped",
        "2 cloves garlic, minced",
        "1 can diced tomatoes",
        "4 cups vegetable broth",
        "1 tsp cumin",
        "1 tsp paprika",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "In a large pot, sauté onion, carrots, and celery until softened.",
        "Add garlic and cook for another minute.",
        "Add lentils, diced tomatoes, vegetable broth, cumin, and paprika.",
        "Bring to a boil, then reduce heat and simmer for 30-40 minutes.",
        "Season with salt and pepper before serving."
      ],
      "dietary_fact": "High in fiber and protein."
    },
    {
      id:5,
      "name": "Chickpea Salad",
      "image": "healthy/Chickpea Salad.png",
      "ingredients": [
        "1 can chickpeas, drained and rinsed",
        "1 cucumber, diced",
        "1 bell pepper, diced",
        "1/4 red onion, finely chopped",
        "1/4 cup feta cheese, crumbled",
        "2 tbsp olive oil",
        "1 tbsp lemon juice",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "In a large bowl, combine chickpeas, cucumber, bell pepper, and red onion.",
        "Add feta cheese, olive oil, and lemon juice.",
        "Season with salt and pepper.",
        "Toss well to combine and serve."
      ],
      "dietary_fact": "Rich in protein and fiber."
    },
    {
      "id": 6,
      "name": "Overnight Oats",
      "image": "healthy/Overnight Oats.png",
      "ingredients": [
        "1/2 cup rolled oats",
        "1/2 cup milk (or almond milk)",
        "1/4 cup Greek yogurt",
        "1 tbsp chia seeds",
        "1 tbsp honey",
        "1/2 cup mixed berries"
      ],
      "instructions": [
        "In a jar or container, combine oats, milk, Greek yogurt, chia seeds, and honey.",
        "Stir well to combine.",
        "Cover and refrigerate overnight.",
        "Top with mixed berries before serving."
      ],
      "dietary_fact": "High in fiber and protein."
    },
    {
      "id": 7,
      "name": "Stuffed Bell Peppers",
      "image": "healthy/Stuffed Bell Peppers.png",
      "ingredients": [
        "4 bell peppers, tops cut off and seeds removed",
        "1 cup cooked quinoa",
        "1 can black beans, drained and rinsed",
        "1 cup corn kernels",
        "1 cup diced tomatoes",
        "1 tsp cumin",
        "1 tsp chili powder",
        "Salt and pepper to taste",
        "1/2 cup shredded cheese (optional)"
      ],
      "instructions": [
        "Preheat oven to 375°F (190°C).",
        "In a large bowl, combine cooked quinoa, black beans, corn, diced tomatoes, cumin, and chili powder.",
        "Season with salt and pepper.",
        "Stuff the bell peppers with the quinoa mixture.",
        "Place the stuffed peppers in a baking dish and cover with foil.",
        "Bake for 30 minutes.",
        "Remove foil, sprinkle with cheese if using, and bake for another 10 minutes."
      ],
      "dietary_fact": "High in fiber and protein."
    },
    {
      "id": 8,
      "name": "Baked Salmon with Asparagus",
      "image": "healthy/Grilled Salmon with Asparagus.jpg",
      "ingredients": [
        "2 salmon fillets",
        "1 bunch asparagus, trimmed",
        "1 lemon, sliced",
        "2 tbsp olive oil",
        "Salt and pepper to taste",
        "1 tsp garlic powder"
      ],
      "instructions": [
        "Preheat oven to 400°F (200°C).",
        "Place salmon fillets and asparagus on a baking sheet.",
        "Drizzle with olive oil and season with salt, pepper, and garlic powder.",
        "Top with lemon slices.",
        "Bake for 15-20 minutes, until salmon is cooked through."
      ],
      "dietary_fact": "High in omega-3 fatty acids and protein."
    },
    {
      "id": 9,
      "name": "Zucchini Noodles with Marinara Sauce",
      "image": "healthy/Zucchini Noodles with Marinara Sauce.png",
      "ingredients": [
        "2 zucchinis, spiralized",
        "1 cup marinara sauce",
        "1 tbsp olive oil",
        "2 cloves garlic, minced",
        "Salt and pepper to taste",
        "1/4 cup grated Parmesan cheese"
      ],
      "instructions": [
        "In a large pan, heat olive oil over medium heat.",
        "Add garlic and cook for 1 minute.",
        "Add zucchini noodles and cook for 2-3 minutes, until tender.",
        "Add marinara sauce and stir to combine.",
        "Season with salt and pepper.",
        "Serve with grated Parmesan cheese on top."
      ],
      "dietary_fact": "Low in carbs and high in vitamins."
    },
    {
      "id": 10,
      "name": "Banana & Almond Butter Smoothie",
      "image": "healthy/Banana & Almond Butter Smoothie.png",
      "ingredients": [
        "1 banana",
        "1 tbsp almond butter",
        "1 cup almond milk",
        "1 tbsp chia seeds",
        "1/2 tsp cinnamon"
      ],
      "instructions": [
        "In a blender, combine banana, almond butter, almond milk, chia seeds, and cinnamon.",
        "Blend until smooth.",
        "Serve immediately."
      ],
      "dietary_fact": "High in healthy fats and protein."
    },
    {
      "id": 11,
      "name": "Spicy Chickpea & Spinach Wrap",
      "image": "healthy/Spicy Chickpea & Spinach Wrap.png",
      "ingredients": [
        "1 can chickpeas, drained and rinsed",
        "2 cups fresh spinach",
        "1/2 red onion, sliced",
        "1 tbsp olive oil",
        "1 tsp cumin",
        "1 tsp paprika",
        "Salt and pepper to taste",
        "4 whole wheat tortillas"
      ],
      "instructions": [
        "In a large pan, heat olive oil over medium heat.",
        "Add red onion and cook until softened.",
        "Add chickpeas, cumin, paprika, salt, and pepper.",
        "Cook for 5-7 minutes, until chickpeas are heated through.",
        "Add spinach and cook until wilted.",
        "Divide the chickpea mixture among the tortillas and wrap tightly."
      ],
      "dietary_fact": "High in fiber and protein."
    },
    {
      "id": 12,
      "name": "Cauliflower Rice Stir-Fry",
      "image": "healthy/Cauliflower Rice Stir-Fry.jpg",
      "ingredients": [
        "1 head cauliflower, grated into rice-sized pieces",
        "1 bell pepper, diced",
        "1 carrot, diced",
        "1 cup peas",
        "2 cloves garlic, minced",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil",
        "1/4 cup green onions, sliced"
      ],
      "instructions": [
        "In a large pan, heat sesame oil over medium heat.",
        "Add garlic and cook for 1 minute.",
        "Add bell pepper, carrot, and peas. Cook for 5-7 minutes.",
        "Add cauliflower rice and soy sauce. Stir well to combine.",
        "Cook for another 5-7 minutes, until cauliflower is tender.",
        "Top with green onions before serving."
      ],
      "dietary_fact": "Low in carbs and high in vitamins."
    },
    {
      "id": 13,
      "name": "Sweet Potato & Black Bean Tacos",
      "image": "healthy/Sweet Potato & Black Bean Tacos.jpg",
      "ingredients": [
        "2 sweet potatoes, peeled and diced",
        "1 can black beans, drained and rinsed",
        "1 tbsp olive oil",
        "1 tsp cumin",
        "1 tsp chili powder",
        "Salt and pepper to taste",
        "8 small corn tortillas",
        "1/4 cup cilantro, chopped",
        "1 lime, cut into wedges"
      ],
      "instructions": [
        "Preheat oven to 400°F (200°C).",
        "In a large bowl, toss sweet potatoes with olive oil, cumin, chili powder, salt, and pepper.",
        "Spread sweet potatoes on a baking sheet and roast for 25-30 minutes, until tender.",
        "In a small pot, heat black beans until warmed through.",
        "Divide sweet potatoes and black beans among the tortillas.",
        "Top with cilantro and a squeeze of lime."
      ],
      "dietary_fact": "High in fiber and vitamins."
    },
    {
      "id": 14,
      "name": "Egg Muffins with Vegetables",
      "image": "healthy/Egg Muffins with Vegetables.jpg",
      "ingredients": [
        "6 eggs",
        "1/2 cup milk",
        "1 bell pepper, diced",
        "1/2 cup spinach, chopped",
        "1/4 cup feta cheese, crumbled",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "Preheat oven to 375°F (190°C).",
        "In a large bowl, whisk together eggs and milk.",
        "Add bell pepper, spinach, and feta cheese.",
        "Season with salt and pepper.",
        "Pour the mixture into a greased muffin tin, filling each cup about 3/4 full.",
        "Bake for 20-25 minutes, until eggs are set."
      ],
      "dietary_fact": "High in protein and vitamins."
    },
    {
      "id": 15,
      "name": "Berry Chia Pudding",
      "image": "healthy/Berry Chia Pudding.jpg",
      "ingredients": [
        "1/4 cup chia seeds",
        "1 cup almond milk",
        "1 tbsp honey",
        "1/2 cup mixed berries"
      ],
      "instructions": [
        "In a bowl, combine chia seeds, almond milk, and honey.",
        "Stir well to combine.",
        "Cover and refrigerate for at least 4 hours or overnight.",
        "Top with mixed berries before serving."
      ],
      "dietary_fact": "High in fiber and omega-3 fatty acids."
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
      link.href = `healthy1.html?id=${recipe.id}`;


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

  // Create dietary fact section
  const dietaryFactHeader = document.createElement("h2");
  dietaryFactHeader.textContent = "Dietary Fact";
  const dietaryFact = document.createElement("p");
  dietaryFact.textContent = recipe.dietaryFact || "No dietary facts available.";

  // Append all elements
  detailContainer.appendChild(title);
  detailContainer.appendChild(image);
  detailContainer.appendChild(ingredientsHeader);
  detailContainer.appendChild(ingredientsList);
  detailContainer.appendChild(instructionsHeader);
  detailContainer.appendChild(instructions);
  detailContainer.appendChild(dietaryFactHeader);
  detailContainer.appendChild(dietaryFact);
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
