import React from "react";

// PUBLIC_INTERFACE
export default function RecipeDetails({ recipe, onBack, onToggleFavorite, isFavorite }) {
  /** Detailed view of a recipe with ingredients and steps. */
  if (!recipe) {
    return (
      <div className="container main">
        <p className="helper">Recipe not found.</p>
        <button className="btn" onClick={onBack}>Back</button>
      </div>
    );
  }

  return (
    <div className="container main">
      <button className="btn" onClick={onBack} aria-label="Back to list">
        ← Back
      </button>
      <div className="hero" style={{ marginTop: 12 }}>
        <img src={recipe.image} alt={recipe.title} />
        <div className="panel">
          <h1 style={{ marginTop: 0 }}>{recipe.title}</h1>
          <div style={{ color: "#6b7280", marginBottom: 10 }}>
            ⏱ {recipe.time}m • {recipe.difficulty}
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            {(recipe.tags || []).map((t) => (
              <span key={t} className="badge">#{t}</span>
            ))}
          </div>
          <button
            className={`btn ${isFavorite ? "primary" : ""}`}
            onClick={() => onToggleFavorite(recipe.id)}
          >
            {isFavorite ? "★ In Favorites" : "☆ Add to Favorites"}
          </button>
        </div>
      </div>

      <div className="panel" style={{ marginBottom: 16 }}>
        <h3 className="section-title">Description</h3>
        <p style={{ marginTop: 0 }}>{recipe.description}</p>
      </div>

      <div className="panel" style={{ marginBottom: 16 }}>
        <h3 className="section-title">Ingredients</h3>
        <ul>
          {(recipe.ingredients || []).map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <h3 className="section-title">Steps</h3>
        <ol>
          {(recipe.steps || []).map((step, idx) => (
            <li key={idx} style={{ marginBottom: 6 }}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
