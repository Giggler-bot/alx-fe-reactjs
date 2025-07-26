import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore((state) => state.recipes.find(r => r.id === parseInt(recipeId)));

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
}

export default RecipeDetails;