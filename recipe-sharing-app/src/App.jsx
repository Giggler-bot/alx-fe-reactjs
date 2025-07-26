import './App.css'; // Keep your CSS import
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails'; 
import SearchBar from './components/SearchBar';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Recipe Sharing Application</h1>

      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Home</Link>
        {/* You can add other global navigation links here if desired */}
      </nav>
        <Routes>
        <Route index element={
          <>
            <SearchBar /> {/* NEW: Place SearchBar here */}
            <AddRecipeForm />
            <RecipeList />
          </>
        } />

        <Route path="recipes/:recipeId" element={<RecipeDetails />} />

        <Route path="*" element={<h2>404 - Recipe/Content Not Found</h2>} />
      </Routes>

    </div>
  );
}

export default App;
