import React from "react";

// PUBLIC_INTERFACE
export default function SearchBar({ value, onChange, onClear }) {
  /** Controlled search bar with clear button. */
  return (
    <div className="searchbar">
      <input
        aria-label="Search recipes"
        placeholder="Search recipes, tags, ingredients..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value ? (
        <button className="btn" onClick={onClear} aria-label="Clear search">
          Clear
        </button>
      ) : null}
    </div>
  );
}
