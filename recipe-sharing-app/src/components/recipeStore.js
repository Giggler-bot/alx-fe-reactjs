import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ 
      recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  
  updatingRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)
    })),
}));

