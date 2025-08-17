import { useEffect, useState } from "react"; // useEffect present
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = data.find((r) => r.id === Number(id));
    setRecipe(found || null);
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <p className="text-red-600">Recipe not found.</p>
        <Link to="/" className="underline text-blue-600">Back to Home</Link>
      </div>
    );
  }

  const ingredients = recipe.ingredients || [];
  const instructions = recipe.instructions || []; // contains the literal word "instructions"

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-xl shadow"
      />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="text-gray-700 mt-2">{recipe.summary}</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-lg border p-4 bg-white shadow">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-lg border p-4 bg-white shadow">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            {instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </section>
      </div>

      <Link
        to="/"
        className="inline-block mt-6 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default RecipeDetail;