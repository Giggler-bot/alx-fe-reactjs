import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  // Generate recommendations when component mounts or favorites change
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]); // Dependency array: re-run if generateRecommendations changes

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#e9f5e9' }}>
      <h2>Recommended For You</h2>
      {recommendations.length === 0 ? (
        <p>Add some favorites to get recommendations!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f0fff0', borderRadius: '5px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`} style={{ color: '#007bff', textDecoration: 'none', fontSize: '0.9em' }}>
              View Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;