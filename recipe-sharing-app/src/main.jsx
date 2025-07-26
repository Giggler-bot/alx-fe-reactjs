import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'; // App component will now handle nested routes
import RecipeDetails from './components/RecipeDetails'; // Still needed for its specific route

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* This is the ONE AND ONLY BrowserRouter for your app */}
    <BrowserRouter>
      <Routes>
        {/*
          The '/' route renders the App component.
          Any specific routes like '/recipes/:recipeId' should ideally be
          handled by the App component itself or explicitly here if
          they are top-level. For this structure, let's have App handle them.
        */}
        <Route path="/" element={<App />} />
        {/*
          We need to explicitly define the RecipeDetails route here as well,
          because `RecipeDetails` is a standalone component that relies on `useParams`
          and needs to be rendered directly by React Router at this level
          if `App` doesn't exclusively manage all sub-routes.
          This ensures `RecipeDetails` gets the routing context correctly.
        */}
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        {/* Add other top-level routes here if needed in the future */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);