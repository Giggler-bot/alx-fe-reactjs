import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [], // New: Array to store IDs of favorite recipes
  recommendations: [], // New: Array for recommendations

  addRecipe: (newRecipe) => set(state => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
      // Re-generate recommendations after adding a recipe (optional, could be on demand)
      // This is a simple re-generation, real recommendation engines are complex.
      recommendations: state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      ),
    };
  }),
  setRecipes: (recipes) => set(state => ({
    recipes,
    filteredRecipes: recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  deleteRecipe: (id) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
      favorites: state.favorites.filter(favId => favId !== id), // Also remove from favorites if deleted
      recommendations: updatedRecipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      ),
    };
  }),
  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
      recommendations: updatedRecipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      ),
    };
  }),
  setSearchTerm: (term) => set(state => {
    return {
      searchTerm: term,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    };
  }),

  // New actions for favorites
  addFavorite: (recipeId) => set(state => {
    if (state.favorites.includes(recipeId)) return {}; // Prevent duplicates
    return {
      favorites: [...state.favorites, recipeId],
      // Trigger recommendation generation when favorites change
      recommendations: state.recipes.filter(recipe =>
        [...state.favorites, recipeId].includes(recipe.id) && Math.random() > 0.5
      ),
    };
  }),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId),
    // Trigger recommendation generation when favorites change
    recommendations: state.recipes.filter(recipe =>
      state.favorites.filter(id => id !== recipeId).includes(recipe.id) && Math.random() > 0.5
    ),
  })),

  // New action for recommendations (can be called manually or on state changes)
  generateRecommendations: () => set(state => {
    // Mock implementation: A recipe is recommended if it's a favorite AND random chance
    // In a real app, this logic would be much more sophisticated.
    const recommended = state.recipes.filter(recipe =>
      // Ensure the recipe exists in the full list and is a favorite
      state.favorites.includes(recipe.id)
    ).sort(() => 0.5 - Math.random()) // Simple shuffle for variety
    .slice(0, 3); // Limit to top 3 recommendations

    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };