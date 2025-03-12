const recipes = [
    {
        id: 1,
        name: "Classic Pancakes",
        image: "breakfast/classic-pancakes.jpg",
        ingredients: [
            "1 cup all-purpose flour",
            "1 tablespoon sugar",
            "1 teaspoon baking powder",
            "1/2 teaspoon salt",
            "1 cup milk",
            "1 egg",
            "2 tablespoons melted butter"
        ],
        instructions: [
            "In a bowl, mix flour, sugar, baking powder, and salt.",
            "Add milk, egg, and melted butter; stir until smooth.",
            "Cook on a greased skillet over medium heat until bubbles form, then flip.",
            "Serve warm with syrup."
        ],
        dietaryFact: "A quick source of carbohydrates for energy in the morning."
    },
    {
        id: 2,
        name: "Avocado Toast",
        image: "breakfast/avocado-toast.jpg",
        ingredients: [
            "2 slices whole-grain bread",
            "1 ripe avocado",
            "Salt and pepper to taste",
            "Optional: chili flakes, olive oil, or lemon juice"
        ],
        instructions: [
            "Toast the bread slices.",
            "Mash the avocado and spread it evenly on the toast.",
            "Season with salt, pepper, and optional toppings."
        ],
        dietaryFact: "Rich in healthy fats and fiber for sustained energy."
    },
    {
        id: 3,
        name: "Oatmeal with Fruits",
        image: "breakfast/oatmeal-fruits.jpg",
        ingredients: [
            "1 cup rolled oats",
            "2 cups milk or water",
            "1/4 teaspoon cinnamon",
            "1/2 cup mixed fruits (bananas, berries, etc.)",
            "1 tablespoon honey or maple syrup"
        ],
        instructions: [
            "Cook oats in milk or water over medium heat until soft.",
            "Stir in cinnamon and top with fruits and sweetener of choice."
        ],
        dietaryFact: "High in fiber and antioxidants, keeping you full for longer."
    },
    {
        id: 4,
        name: "Scrambled Eggs",
        image: "breakfast/scrambled-eggs.jpg",
        ingredients: [
            "2 eggs",
            "1 tablespoon milk",
            "Salt and pepper to taste",
            "1 teaspoon butter"
        ],
        instructions: [
            "Beat eggs with milk, salt, and pepper.",
            "Melt butter in a pan and cook the egg mixture, stirring until fluffy."
        ],
        dietaryFact: "Packed with protein to start your day strong."
    },
    {
        id: 5,
        name: "Smoothie Bowl",
        image: "breakfast/smoothie-bowl.jpg",
        ingredients: [
            "1 frozen banana",
            "1 cup frozen berries",
            "1/2 cup yogurt or plant-based milk",
            "Toppings: granola, chia seeds, fresh fruits"
        ],
        instructions: [
            "Blend the banana, berries, and yogurt until smooth.",
            "Pour into a bowl and top with desired toppings."
        ],
        dietaryFact: "A nutrient-packed, refreshing breakfast option."
    },
    {
        id: 6,
        name: "Breakfast Burrito",
        image: "breakfast/breakfast-burrito.jpg",
        ingredients: [
            "1 large tortilla",
            "2 scrambled eggs",
            "1/4 cup cooked black beans",
            "1/4 cup shredded cheese",
            "1 tablespoon salsa"
        ],
        instructions: [
            "Layer eggs, beans, cheese, and salsa in the tortilla.",
            "Fold and roll tightly, then heat in a pan or microwave."
        ],
        dietaryFact: "A high-protein and portable meal option."
    },
    {
        id: 7,
        name: "Banana Bread",
        image: "breakfast/banana-bread.jpg",
        ingredients: [
            "2 ripe bananas",
            "1/2 cup sugar",
            "1 egg",
            "1/4 cup melted butter",
            "1 cup all-purpose flour",
            "1/2 teaspoon baking soda",
            "1/4 teaspoon salt"
        ],
        instructions: [
            "Mash bananas and mix with sugar, egg, and butter.",
            "Combine with dry ingredients and bake at 350°F (175°C) for 45 minutes."
        ],
        dietaryFact: "A good source of natural sugars and potassium."
    },
    {
        id: 8,
        name: "Greek Yogurt Parfait",
        image: "breakfast/yogurt-parfait.jpg",
        ingredients: [
            "1 cup Greek yogurt",
            "1/2 cup granola",
            "1/2 cup mixed berries",
            "1 tablespoon honey"
        ],
        instructions: [
            "Layer yogurt, granola, and berries in a glass or bowl.",
            "Drizzle honey on top and serve."
        ],
        dietaryFact: "Rich in protein and probiotics for gut health."
    },
    {
        id: 9,
        name: "Peanut Butter Toast",
        image: "breakfast/peanut-butter-toast.jpg",
        ingredients: [
            "2 slices whole-grain bread",
            "2 tablespoons peanut butter",
            "1 banana, sliced"
        ],
        instructions: [
            "Toast the bread slices.",
            "Spread peanut butter and top with banana slices."
        ],
        dietaryFact: "A good balance of protein, healthy fats, and carbs."
    },
    {
        id: 10,
        name: "Spinach and Cheese Omelette",
        image: "breakfast/spinach-cheese-omelette.jpg",
        ingredients: [
            "2 eggs",
            "1/4 cup shredded cheese",
            "1/4 cup fresh spinach, chopped",
            "Salt and pepper to taste",
            "1 teaspoon butter"
        ],
        instructions: [
            "Beat eggs with salt and pepper.",
            "Pour into a greased pan, add spinach and cheese, and fold when cooked."
        ],
        dietaryFact: "Loaded with protein and essential vitamins."
    },
    {
        id: 11,
        name: "Chia Seed Pudding",
        image: "breakfast/chia-pudding.jpg",
        ingredients: [
            "1/4 cup chia seeds",
            "1 cup milk or plant-based milk",
            "1 tablespoon honey or maple syrup",
            "1/2 cup fresh fruit"
        ],
        instructions: [
            "Mix chia seeds with milk and sweetener; refrigerate overnight.",
            "Top with fruit before serving."
        ],
        dietaryFact: "High in omega-3 fatty acids and fiber."
    },
    {
        id: 12,
        name: "Breakfast Sandwich",
        image: "breakfast/breakfast-sandwich.jpg",
        ingredients: [
            "1 English muffin",
            "1 fried egg",
            "1 slice of cheese",
            "1 slice of ham or turkey"
        ],
        instructions: [
            "Toast the English muffin.",
            "Assemble the sandwich with egg, cheese, and meat."
        ],
        dietaryFact: "A hearty and protein-rich meal to fuel your morning."
    },
    {
        id: 13,
        name: "Apple Cinnamon Overnight Oats",
        image: "breakfast/apple-cinnamon-oats.jpg",
        ingredients: [
            "1/2 cup rolled oats",
            "1/2 cup milk or plant-based milk",
            "1/4 cup diced apple",
            "1/4 teaspoon cinnamon",
            "1 teaspoon honey"
        ],
        instructions: [
            "Mix all ingredients in a jar and refrigerate overnight.",
            "Serve cold or warmed up."
        ],
        dietaryFact: "Convenient and packed with slow-digesting carbs."
    },
    {
        id: 14,
        name: "Vegetable Frittata",
        image: "breakfast/vegetable-frittata.jpg",
        ingredients: [
            "3 eggs",
            "1/4 cup diced vegetables (bell peppers, onions, spinach)",
            "1/4 cup shredded cheese",
            "1 teaspoon olive oil"
        ],
        instructions: [
            "Beat eggs and mix with vegetables and cheese.",
            "Pour into a greased pan and cook over medium heat until set."
        ],
        dietaryFact: "A nutrient-dense, low-carb breakfast option."
    },
    {
        id: 15,
        name: "Breakfast Muffins",
        image: "breakfast/breakfast-muffins.jpg",
        ingredients: [
            "1 cup whole wheat flour",
            "1/2 teaspoon baking soda",
            "1/4 teaspoon salt",
            "1 egg",
            "1/2 cup milk",
            "1/4 cup honey",
            "1/4 cup grated carrot or zucchini"
        ],
        instructions: [
            "Mix dry and wet ingredients separately, then combine.",
            "Bake at 350°F (175°C) for 20-25 minutes."
        ],
        dietaryFact: "Perfect for a quick grab-and-go breakfast."
    }
];


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
        link.href = `breakfast1.html?id=${recipe.id}`;
  
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

  
