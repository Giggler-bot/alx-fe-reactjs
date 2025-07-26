// import { useParams } from 'react-router-dom';
// import { useRecipeStore } from './recipeStore';
// import EditRecipeForm from './EditRecipeForm';
// import DeleteRecipeButton from './DeleteRecipeButton';

// const RecipeDetails = () => {
//   const { id } = useParams();
//   const recipe = useRecipeStore((state) =>
//     state.recipes.find((r) => r.id === id)
//   );

//   if (!recipe) return <p>Recipe not found.</p>;

//   return (
//     <div>
//       <h1>{recipe.title}</h1>
//       <p>{recipe.description}</p>

//       <EditRecipeForm recipe={recipe} />
//       <DeleteRecipeButton recipeId={recipe.id} />
//     </div>
//   );
// };

// export default RecipeDetails;
import { useRecipeStore } from './recipeStore';
import { Link, useParams, useNavigate } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm'; // Will create this next
import DeleteRecipeButton from './DeleteRecipeButton'; // Will create this next
import { useState } from 'react';

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Get recipeId from the URL
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // Convert recipeId to a number because useParams returns a string
  const id = parseInt(recipeId, 10);

  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === id)
  );

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
          <h1>{recipe.title}</h1>
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