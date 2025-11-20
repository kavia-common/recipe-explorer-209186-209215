export type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  cuisine: string;
  time: string; // e.g., "30 min"
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
  ingredients: string[];
  steps: string[];
};

// PUBLIC_INTERFACE
export function getMockRecipes(): Recipe[] {
  /** Returns a list of mock recipes for local development without external services. */
  return [
    {
      id: "grilled-salmon",
      title: "Citrus Herb Grilled Salmon",
      description:
        "Bright, zesty grilled salmon with fresh herbs and a hint of garlic. Perfect for a light dinner.",
      image: "/assets/salmon.jpg",
      cuisine: "American",
      time: "25 min",
      servings: 2,
      difficulty: "Easy",
      tags: ["seafood", "healthy", "grill", "gluten-free"],
      ingredients: [
        "2 salmon fillets",
        "1 lemon (zested and juiced)",
        "1 tbsp olive oil",
        "2 cloves garlic (minced)",
        "Fresh dill (chopped)",
        "Salt & black pepper",
      ],
      steps: [
        "Pat salmon dry and season with salt and pepper.",
        "Mix lemon juice/zest, olive oil, garlic, and dill.",
        "Brush mixture over salmon.",
        "Grill over medium-high heat for 4–5 minutes per side.",
        "Serve with extra lemon wedges.",
      ],
    },
    {
      id: "veggie-pasta",
      title: "Roasted Veggie Pasta",
      description:
        "A hearty pasta with roasted vegetables, olive oil, and parmesan for a weeknight staple.",
      image: "/assets/veggie-pasta.jpg",
      cuisine: "Italian",
      time: "35 min",
      servings: 4,
      difficulty: "Easy",
      tags: ["vegetarian", "comfort", "roasted"],
      ingredients: [
        "300g penne pasta",
        "1 zucchini (sliced)",
        "1 red bell pepper (sliced)",
        "1 small red onion (sliced)",
        "2 tbsp olive oil",
        "Parmesan cheese (to serve)",
        "Salt & black pepper",
      ],
      steps: [
        "Preheat oven to 220°C / 425°F.",
        "Toss veggies with olive oil, salt, and pepper; roast 18–20 minutes.",
        "Cook pasta according to package directions; reserve some pasta water.",
        "Combine pasta with roasted veggies, adding a splash of pasta water.",
        "Top with parmesan and serve.",
      ],
    },
    {
      id: "chicken-curry",
      title: "Coconut Chicken Curry",
      description:
        "Fragrant curry simmered in coconut milk with spices and tender chicken.",
      image: "/assets/chicken-curry.jpg",
      cuisine: "Indian",
      time: "45 min",
      servings: 4,
      difficulty: "Medium",
      tags: ["curry", "spicy", "comfort"],
      ingredients: [
        "500g chicken thighs (cubed)",
        "1 onion (diced)",
        "2 cloves garlic (minced)",
        "1 tbsp curry powder",
        "1 tsp turmeric",
        "400ml coconut milk",
        "1 tbsp tomato paste",
        "2 tbsp oil",
        "Salt",
      ],
      steps: [
        "Heat oil, sauté onions until translucent.",
        "Add garlic and spices; cook 1 minute.",
        "Add chicken; brown lightly.",
        "Stir in coconut milk and tomato paste; simmer 20–25 minutes.",
        "Season and serve with rice.",
      ],
    },
    {
      id: "avocado-toast",
      title: "Avocado Toast with Poached Egg",
      description:
        "Crispy toast, creamy avocado, and a runny poached egg with chili flakes.",
      image: "/assets/avocado-toast.jpg",
      cuisine: "Fusion",
      time: "15 min",
      servings: 1,
      difficulty: "Easy",
      tags: ["breakfast", "quick", "healthy"],
      ingredients: [
        "1 slice sourdough bread",
        "1/2 ripe avocado",
        "1 egg",
        "Salt, pepper, chili flakes",
        "Lemon juice",
      ],
      steps: [
        "Toast bread to preference.",
        "Mash avocado with lemon juice, salt, and pepper.",
        "Poach egg in simmering water for ~3 minutes.",
        "Spread avocado on toast, top with egg and chili flakes.",
      ],
    },
  ];
}

// PUBLIC_INTERFACE
export function findRecipeById(id: string): Recipe | undefined {
  /** Finds a recipe by its unique id from mock data. */
  return getMockRecipes().find((r) => r.id === id);
}
