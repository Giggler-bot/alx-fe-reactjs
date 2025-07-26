import React from 'react';
import { useRecipeStore } from './recipeStore'; // Path updated relative to components folder

const SearchBar = () => {
  // Get the action to set the search term
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  // Get the current search term to display in the input
  const searchTerm = useRecipeStore(state => state.searchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes by title..."
      value={searchTerm} // Controlled component
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: '20px'
      }}
    />
  );
};

export default SearchBar;