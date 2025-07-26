import { useRecipeStore } from './recipeStore';
import { Link, useParams, useNavigate } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const id = parseInt(recipeId, 10); // Convert ID to number

  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === id)
  );

  // Get favorite actions and state
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = favorites.includes(id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found!</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px', margin: '20px 0' }}>
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onSave={() => setIsEditing(false)} />
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>{recipe.title}</h1>
            <button
              onClick={toggleFavorite}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '2em',
                color: isFavorite ? '#ff4500' : '#ccc' // Orange if favorited
              }}
              title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              &#9829; {/* Heart icon */}
            </button>
          </div>
          <p>{recipe.description}</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
            <button onClick={() => setIsEditing(true)} style={{ padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Edit Recipe
            </button>
            <DeleteRecipeButton recipeId={recipe.id} onDeleted={() => navigate('/')} />
          </div>
        </>
      )}
      <div style={{ marginTop: '20px' }}>
        <Link to="/">Back to Recipe List</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;