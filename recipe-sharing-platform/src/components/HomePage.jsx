import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link here
import RecipeCard from "./RecipeCard";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <div className="mb-6 rounded-xl shadow hover:shadow-md bg-gradient-to-r from-white to-gray-50 p-5">
        <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
        <p className="text-gray-600 mt-1">
          Browse delicious recipes and click a card to view details.
        </p>
        {/* ✅ Example Link used directly inside HomePage */}
        <Link
          to="/add"
          className="inline-block mt-3 px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
        >
          Add a New Recipe
        </Link>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
