import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '', // New state for search term
  filteredRecipes: [], // New state for filtered results

  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => {
    const updatedRecipes = [...state.recipes, newRecipe];
    // After adding, re-filter the recipes to include the new one if it matches
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  // Action to set initial recipes
  setRecipes: (recipes) => set(state => ({
    recipes,
    // When setting recipes, immediately filter them based on current searchTerm
    filteredRecipes: recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  // Action to delete a recipe
  deleteRecipe: (id) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    // After deleting, re-filter
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  // Action to update a recipe
  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    // After updating, re-filter
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  // New actions for search and filtering:
  setSearchTerm: (term) => set(state => {
    // When search term changes, update term and immediately re-filter
    return {
      searchTerm: term,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    };
  }),
  // filterRecipes action is now integrated directly into setSearchTerm for simplicity
  // If you had more complex filters, you might call it separately.
  // For now, it's implicitly triggered by setSearchTerm.
}));

export { useRecipeStore };