const recipes = [
    {
      id:1,
      "name": "Carrot Cake",
      "image" : "desserts/carrot cake.jpg",
      "ingredients": [
        "2 cups all-purpose flour",
        "2 cups grated carrots",
        "1 cup vegetable oil",
        "4 large eggs",
        "2 cups granulated sugar",
        "2 teaspoons baking soda",
        "2 teaspoons ground cinnamon",
        "1/2 teaspoon salt",
        "1 cup chopped walnuts",
        "8 oz cream cheese for frosting",
        "1/2 cup butter for frosting",
        "2 cups powdered sugar for frosting"
      ],
      "instructions": [
        "Preheat oven to 350°F (175°C)",
        "Mix flour, baking soda, cinnamon, and salt",
        "Beat eggs, oil, and sugar until well combined",
        "Fold in dry ingredients gradually",
        "Stir in carrots and walnuts",
        "Bake for 40-45 minutes",
        "Let cool completely",
        "Make frosting by beating cream cheese, butter, and powdered sugar",
        "Frost the cooled cake"
      ]
    },
    {
      id:2,
      "name": "Pumpkin Pie",
      "image" : "desserts/pumpkin pie.jpg",
      "ingredients": [
        "1 pie crust",
        "15 oz canned pumpkin puree",
        "1 cup heavy cream",
        "2 large eggs",
        "3/4 cup brown sugar",
        "1 teaspoon ground cinnamon",
        "1/2 teaspoon ground ginger",
        "1/4 teaspoon ground nutmeg",
        "1/4 teaspoon salt"
      ],
      "instructions": [
        "Preheat oven to 425°F (220°C)",
        "Whisk pumpkin, cream, eggs, and spices",
        "Pour into pie crust",
        "Bake for 15 minutes",
        "Reduce temperature to 350°F and bake 40-50 minutes more",
        "Cool completely before serving"
      ]
    },
    {
      id:3,
      "name": "Apple Pie",
      "image" : "desserts/Apple pie.jpg",
      "ingredients": [
        "2 pie crusts",
        "6 cups sliced apples",
        "3/4 cup sugar",
        "2 tablespoons flour",
        "1 teaspoon ground cinnamon",
        "1/4 teaspoon nutmeg",
        "2 tablespoons butter",
        "1 egg for egg wash"
      ],
      "instructions": [
        "Preheat oven to 425°F (220°C)",
        "Mix apples with sugar, flour, and spices",
        "Fill bottom crust with apple mixture",
        "Dot with butter",
        "Cover with top crust and seal edges",
        "Cut slits in top crust",
        "Brush with egg wash",
        "Bake 45 minutes until golden brown"
      ]
    },
    {
      id:4,
      "name": "Banana Cake",
      "image" : "desserts/banana cake.jpg",
      "ingredients": [
        "3 ripe bananas",
        "1 3/4 cups all-purpose flour",
        "2/3 cup sugar",
        "2 large eggs",
        "1/2 cup butter",
        "1 teaspoon baking soda",
        "1/4 teaspoon salt",
        "1 teaspoon vanilla extract"
      ],
      "instructions": [
        "Preheat oven to 350°F (175°C)",
        "Mash bananas in a large bowl",
        "Cream butter and sugar together",
        "Beat in eggs and vanilla",
        "Mix in flour, baking soda, and salt",
        "Fold in mashed bananas",
        "Pour into greased pan",
        "Bake for 50-60 minutes"
      ]
    },
    {
      id:5,
      "name": "Classic Brownies",
      "image" : "desserts/brownies.jpg",
      "ingredients": [
        "1 cup butter",
        "2 cups sugar",
        "4 eggs",
        "2 teaspoons vanilla extract",
        "1 cup cocoa powder",
        "1 cup all-purpose flour",
        "1/2 teaspoon salt",
        "1 cup chocolate chips"
      ],
      "instructions": [
        "Preheat oven to 350°F (175°C)",
        "Melt butter in microwave",
        "Mix in sugar, eggs, and vanilla",
        "Add cocoa powder, flour, and salt",
        "Fold in chocolate chips",
        "Pour into lined baking pan",
        "Bake for 30-35 minutes",
        "Cool before cutting"
      ]
    },
    {
      id:6,
      "name": "Chocolate Chip Cookies",
      "image" : "desserts/choco chip cookies.jpg",
      "ingredients": [
        "2 1/4 cups all-purpose flour",
        "1 cup butter, softened",
        "3/4 cup sugar",
        "3/4 cup brown sugar",
        "2 large eggs",
        "1 teaspoon vanilla extract",
        "1 teaspoon baking soda",
        "1/2 teaspoon salt",
        "2 cups chocolate chips"
      ],
      "instructions": [
        "Preheat oven to 375°F (190°C)",
        "Cream butter and sugars until fluffy",
        "Beat in eggs and vanilla",
        "Mix in flour, baking soda, and salt",
        "Stir in chocolate chips",
        "Drop rounded tablespoons onto baking sheets",
        "Bake for 9-11 minutes until golden",
        "Cool on wire rack"
      ]
    },
    {
      id:7,
      "name": "Fruit Tart",
      "image" : "desserts/fruit tart.jpg",
      "ingredients": [
        "1 1/2 cups all-purpose flour",
        "1/2 cup butter",
        "1/4 cup sugar",
        "1 egg",
        "8 oz cream cheese",
        "1/4 cup powdered sugar",
        "1 teaspoon vanilla extract",
        "Assorted fresh fruits",
        "1/4 cup apricot jam"
      ],
      "instructions": [
        "Make pastry by mixing flour, butter, sugar, and egg",
        "Chill dough for 30 minutes",
        "Preheat oven to 375°F (190°C)",
        "Roll and press into tart pan",
        "Bake crust for 20-25 minutes",
        "Beat cream cheese, sugar, and vanilla for filling",
        "Spread filling in cooled crust",
        "Arrange fruits on top",
        "Brush with warmed apricot jam"
      ]
    },
    {
        "id": 18,
        "name": "Chocolate Covered Strawberries",
        "image" : "desserts/chocolate strawberries.jpg",
        "ingredients": [
          "16 oz fresh strawberries",
          "12 oz semi-sweet chocolate chips",
          "2 tablespoons shortening",
          "Optional white chocolate for drizzle"
        ],
        "instructions": [
          "Wash and dry strawberries thoroughly",
          "Melt chocolate and shortening in double boiler",
          "Dip strawberries in chocolate",
          "Place on parchment paper",
          "Drizzle with white chocolate if desired",
          "Refrigerate until set",
          "Serve at room temperature"
        ]
      
      
    },
    {
      id:9,
      "name": "Tiramisu",
      "image" : "desserts/tiramisu.jpg",
      "ingredients": [
        "6 egg yolks",
        "1 cup sugar",
        "1 1/4 cups mascarpone cheese",
        "1 3/4 cups heavy whipping cream",
        "2 packages ladyfinger cookies",
        "1 cup cold espresso",
        "1/2 cup coffee liqueur",
        "Cocoa powder for dusting"
      ],
      "instructions": [
        "Mix espresso and coffee liqueur",
        "Whisk egg yolks and sugar until pale",
        "Add mascarpone cheese",
        "Whip cream separately until stiff peaks",
        "Fold whipped cream into mascarpone mixture",
        "Dip ladyfingers in coffee mixture",
        "Layer soaked ladyfingers and cream mixture",
        "Dust with cocoa powder",
        "Refrigerate 4 hours or overnight"
      ]
    },
    {
      id:10,
      "name": "Crème Brulee",
      "image" : "desserts/creme brulee.png",
      "ingredients": [
        "2 cups heavy cream",
        "1 vanilla bean or 1 tsp vanilla extract",
        "4 egg yolks",
        "1/3 cup sugar",
        "Additional sugar for topping",
        "Pinch of salt"
      ],
      "instructions": [
        "Preheat oven to 300°F (150°C)",
        "Heat cream with vanilla until almost boiling",
        "Whisk egg yolks with sugar",
        "Slowly stir hot cream into egg mixture",
        "Pour into ramekins",
        "Bake in water bath for 30-35 minutes",
        "Chill for at least 2 hours",
        "Sprinkle sugar on top",
        "Caramelize with torch until golden"
      ]
    },
    {
      id:11,
      "name": "Vanilla Panna Cotta",
      "image" : "desserts/vanilla panna cotta.jpg",
      "ingredients": [
        "2 cups heavy cream",
        "1/2 cup sugar",
        "1 vanilla bean or 1 tsp vanilla extract",
        "2 1/4 teaspoons gelatin powder",
        "3 tablespoons cold water"
      ],
      "instructions": [
        "Bloom gelatin in cold water",
        "Heat cream and sugar until almost boiling",
        "Add vanilla and stir",
        "Remove from heat and add gelatin",
        "Pour into molds",
        "Refrigerate for 4 hours or overnight",
        "Dip molds in hot water to unmold"
      ]
    },
    {
      id:12,
      "name": "Lemon Bars",
      "image" : "desserts/lemon bars.jpg",
      "ingredients": [
        "2 cups all-purpose flour",
        "1/2 cup powdered sugar",
        "1 cup butter",
        "4 large eggs",
        "2 cups granulated sugar",
        "1/3 cup lemon juice",
        "1/4 cup flour",
        "Additional powdered sugar for dusting"
      ],
      "instructions": [
        "Preheat oven to 350°F (175°C)",
        "Mix flour, powdered sugar, and butter for crust",
        "Press into baking pan",
        "Bake crust for 20 minutes",
        "Whisk eggs, sugar, lemon juice, and flour",
        "Pour over hot crust",
        "Bake additional 25 minutes",
        "Cool completely",
        "Dust with powdered sugar before serving"
      ]
    },
    {
      "id": 13,
      "name": "Chocolate Mug Cake",
      "image" : "desserts/chocolate cake.jpg",
      "ingredients": [
        "4 tablespoons flour",
        "4 tablespoons sugar",
        "2 tablespoons cocoa powder",
        "1 egg",
        "3 tablespoons milk",
        "3 tablespoons oil",
        "1/4 teaspoon vanilla extract",
        "Optional chocolate chips"
      ],
      "instructions": [
        "Mix dry ingredients in a microwave-safe mug",
        "Add egg and mix well",
        "Stir in milk, oil, and vanilla",
        "Add chocolate chips if desired",
        "Microwave for 1.5-2 minutes",
        "Let cool for 1 minute before eating"
      ]
    },
    {
      "id": 14,
      "name": "Chocolate Mousse",
      "image" : "desserts/chocolate mousse.jpg",
      "ingredients": [
        "8 oz semi-sweet chocolate",
        "4 large eggs, separated",
        "1/4 cup sugar",
        "1 cup heavy cream",
        "1 teaspoon vanilla extract",
        "Pinch of salt"
      ],
      "instructions": [
        "Melt chocolate in double boiler",
        "Beat egg yolks with half the sugar",
        "Whip cream until soft peaks form",
        "Beat egg whites with remaining sugar until stiff peaks",
        "Fold chocolate into yolk mixture",
        "Fold in whipped cream",
        "Fold in egg whites gently",
        "Divide into serving dishes",
        "Chill for at least 2 hours"
      ]
    },
    {
      "id": 15,
      "name": "Blueberry Muffins",
      "image" : "desserts/blueberry muffins.jpg",
      "ingredients": [
        "2 cups all-purpose flour",
        "2 teaspoons baking powder",
        "1/2 cup butter",
        "1 cup sugar",
        "2 large eggs",
        "1 teaspoon vanilla extract",
        "1/2 cup milk",
        "2 cups fresh blueberries",
        "1/2 teaspoon salt"
      ],
      "instructions": [
        "Preheat oven to 375°F (190°C)",
        "Mix flour, baking powder, and salt",
        "Cream butter and sugar until light",
        "Beat in eggs and vanilla",
        "Alternate adding flour mixture and milk",
        "Fold in blueberries",
        "Fill muffin cups",
        "Bake for 20-25 minutes"
      ]
    },
    
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
        link.href = `desserts1.html?id=${recipe.id}`;
  
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
