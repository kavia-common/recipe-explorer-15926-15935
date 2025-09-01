import React from "react";

// PUBLIC_INTERFACE
export default function RecipeCard({ recipe, onOpen, onToggleFavorite, isFavorite }) {
  /** Displays a recipe card with favorite button and open details. */
  return (
    <article className="card" role="article" aria-label={recipe.title}>
      <img src={recipe.image} alt={recipe.title} />
      <div className="card-body">
        <h3 className="card-title">{recipe.title}</h3>
        <div className="card-meta">
          <span>⏱ {recipe.time}m</span>
          <span>•</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
      <div className="card-actions">
        <button className="btn" onClick={() => onOpen(recipe.id)}>
          View details
        </button>
        <button
          className={`btn ${isFavorite ? "primary" : ""}`}
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(recipe.id)}
        >
          {isFavorite ? "★ Favorited" : "☆ Favorite"}
        </button>
      </div>
    </article>
  );
}
