import React, { useMemo } from "react";
import RecipeCard from "../components/RecipeCard";

// PUBLIC_INTERFACE
export default function Favorites({ recipes, favorites, openRecipe, toggleFavorite }) {
  /** Favorites list derived from favorites IDs. */
  const favRecipes = useMemo(
    () => recipes.filter((r) => favorites.includes(r.id)),
    [recipes, favorites]
  );

  return (
    <div className="container main">
      <h2 className="section-title">Your Favorites</h2>
      {favRecipes.length === 0 ? (
        <p className="helper">No favorites yet. Add some from Browse.</p>
      ) : (
        <section className="grid">
          {favRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onOpen={openRecipe}
              onToggleFavorite={toggleFavorite}
              isFavorite={true}
            />
          ))}
        </section>
      )}
    </div>
  );
}
