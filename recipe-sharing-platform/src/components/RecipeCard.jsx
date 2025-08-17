import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => (
  <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
    <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md" />
    <h2 className="text-xl font-bold mt-2">{recipe.title}</h2>
    <p className="text-gray-600">{recipe.summary}</p>
    <Link to={`/recipe/${recipe.id}`} className="text-blue-500 mt-2 inline-block">
      View Recipe
    </Link>
  </div>
);

export default RecipeCard;
