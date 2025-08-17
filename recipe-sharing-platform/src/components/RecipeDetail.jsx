import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = data.find(r => r.id === parseInt(id));

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-4"/>
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-gray-700 mb-4">{recipe.summary}</p>
      {/* Add ingredients and steps here if available */}
    </div>
  );
};

export default RecipeDetail;
