import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // errors & setErrors present

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    // simple check: at least two items separated by comma or newline
    const items = ingredients.split(/\n|,/).map((s) => s.trim()).filter(Boolean);
    if (items.length < 2) newErrors.ingredients = "Please list at least two ingredients";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // In a real app you would POST to an API or update global state/localStorage
    alert("Recipe submitted! (mock)");
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white border rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring"
            placeholder="e.g., Creamy Mushroom Pasta"
          />
          {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
        </div>

        <div className="md:col-span-1">
          <label className="block text-sm font-medium mb-1">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full h-40 p-2 border rounded focus:outline-none focus:ring"
            placeholder={"One per line or comma-separated\nFlour\nEggs, Milk"}
          />
          {errors.ingredients && (
            <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        <div className="md:col-span-1">
          <label className="block text-sm font-medium mb-1">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full h-40 p-2 border rounded focus:outline-none focus:ring"
            placeholder={"Step 1...\nStep 2..."}
          />
          {errors.steps && <p className="text-red-600 text-sm mt-1">{errors.steps}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;