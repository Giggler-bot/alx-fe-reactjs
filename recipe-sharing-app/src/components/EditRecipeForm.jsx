import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = () => {
    const [title, setTitle] = useState('recipe.title');
    const [description, setDescription] = useState('recipe.description');
    const updateRecipe = useRecipeStore((state) => state.updatingRecipe);

    // updateRecipe is a function that takes an updated recipe object

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe({...recipe, title, description});
        alert("Recipe updated!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Recipe</h2>
            <input 
                type='text'
                placeholder='Recipe Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea 
                name="description" 
                placeholder="Recipe Description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit">Update Recipe</button>
        </form>
    );


}

export default EditRecipeForm;