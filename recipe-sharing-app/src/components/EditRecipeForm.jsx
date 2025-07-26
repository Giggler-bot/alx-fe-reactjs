import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = () => {
    const [title, setTitle] = useState('recipe.title');
    const [description, setDescription] = useState('recipe.description');
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);

    // updateRecipe is a function that takes an updated recipe object

    const handleSubmit = (event) => {
        event.preventDefault();
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
                onChange={(event) => setTitle(event.target.value)}
            />
            <textarea 
                name="description" 
                placeholder="Recipe Description" 
                value={description} 
                onChange={(event) => setDescription(event.target.value)}
            ></textarea>
            <button type="submit">Update Recipe</button>
        </form>
    );


}

export default EditRecipeForm;