import React, { useMemo } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

// PUBLIC_INTERFACE
export default function Recipes({ recipes, query, setQuery, openRecipe, toggleFavorite, favorites }) {
  /** Grid view of recipes with search. */
  const filtered = useMemo(() => {
    if (!query) return recipes;
    const q = query.toLowerCase();
    return recipes.filter((r) => {
      const inTags = (r.tags || []).some((t) => t.toLowerCase().includes(q));
      const inTitle = r.title.toLowerCase().includes(q);
      const inDesc = (r.description || "").toLowerCase().includes(q);
      const inIngredients = (r.ingredients || []).some((i) => i.toLowerCase().includes(q));
      return inTags || inTitle || inDesc || inIngredients;
    });
  }, [recipes, query]);

  return (
    <div className="container main">
      <SearchBar value={query} onChange={setQuery} onClear={() => setQuery("")} />
      {query && (
        <div style={{ color: "#6b7280", marginBottom: 12 }}>
          Showing {filtered.length} result{filtered.length === 1 ? "" : "s"} for "{query}"
        </div>
      )}
      <section className="grid" aria-label="Recipe results">
        {filtered.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onOpen={openRecipe}
            onToggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(recipe.id)}
          />
        ))}
      </section>
    </div>
  );
}
