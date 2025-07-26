import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({id: Date.now(), title, description});
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Add New Recipe</h2>
        <input 
            type='text'
            placeholder='Recipe Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <textarea name="description" id="" placeholder="Recipe Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <button type="submit">Add Recipe</button>
    </form>
  )


};
export default AddRecipeForm;