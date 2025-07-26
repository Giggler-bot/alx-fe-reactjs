import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  // Now consuming filteredRecipes instead of the raw recipes list
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found matching your search.</p> // Updated message
      ) : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`} style={{ color: '#007bff', textDecoration: 'none' }}>
              View Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;