import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes); // Need full recipes to get details
  const favorites = useRecipeStore(state => state.favorites);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  // Map favorite IDs to full recipe objects
  const favoriteRecipes = favorites
    .map(id => recipes.find(recipe => recipe.id === id))
    .filter(Boolean); // Filter out any undefined if a recipe was deleted but still in favorites

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>You haven't favorited any recipes yet!</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3>{recipe.title}</h3>
              <Link to={`/recipes/${recipe.id}`} style={{ color: '#007bff', textDecoration: 'none', fontSize: '0.9em' }}>
                View Details
              </Link>
            </div>
            <button
              onClick={() => removeFavorite(recipe.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#dc3545', fontSize: '1.5em' }}
              title="Remove from Favorites"
            >
              &times;
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;