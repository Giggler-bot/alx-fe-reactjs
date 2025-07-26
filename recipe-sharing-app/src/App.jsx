// import { Routes, Route } from 'react-router-dom';
// import RecipeList from './components/RecipeList';
// import RecipeDetails from './components/RecipeDetails';
// import EditRecipeForm from './components/EditRecipeForm';
// import AddRecipeForm from './components/AddRecipeForm';

// function App() {
//   return (
//     <div>
//       <h1>Recipe Sharing App</h1>
//       <AddRecipeForm />

//       <Routes>
//         <Route path="/" element={<RecipeList />} />
//         <Route path="/recipe/:id" element={<RecipeDetails />} />
//         <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


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
