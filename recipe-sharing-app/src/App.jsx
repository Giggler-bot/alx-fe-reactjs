import './App.css'; // Keep your CSS import
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
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
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
      </Routes>

      {/*
        Routes and Route components can be used here if App.jsx
        is responsible for managing its *own* sub-routes within its scope,
        but typically, if main.jsx handles all top-level routes,
        App.jsx (when rendered as an element of a route) will just
        render its content.

        Given the previous setup where App.jsx had its own Routes,
        we need to *remove* the Routes block from here now that main.jsx
        is managing top-level routes.
      */}

      {/* When App.jsx is rendered by the '/' route in main.jsx,
          it should just display the main components for the home page. */}
      

      {/* No Routes block here anymore */}
    </div>
  );
}

export default App;