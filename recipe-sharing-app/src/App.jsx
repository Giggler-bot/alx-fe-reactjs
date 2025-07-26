// import React from 'react';
// import AddRecipeForm from './components/AddRecipeForm';
// import RecipeList from './components/RecipeList';

// const App = () => {
//   return (
//     <div>
//       <h1>Recipe Sharing App</h1>
//       <AddRecipeForm />
//       <RecipeList />
//     </div>
//   );
// };

// export default App;
import { useRecipeStore } from './components/recipeStore';
import { Link } from 'react-router-dom';

const App = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleAdd = () => {
    const title = prompt('Recipe Title:');
    const description = prompt('Recipe Description:');
    if (title && description) {
      addRecipe({ title, description });
    }
  };

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <button onClick={handleAdd}>Add Recipe</button>

      <ul>
        {recipes.map((r) => (
          <li key={r.id}>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
