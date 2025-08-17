import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <article className="border rounded-lg shadow p-4 bg-white transition hover:shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-3">{recipe.title}</h2>
      <p className="text-gray-600 mt-1">{recipe.summary}</p>
      <Link
        to={`/recipe/${recipe.id}`}
        className="inline-block mt-3 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        View Recipe
      </Link>
    </article>
  );
};

export default RecipeCard;