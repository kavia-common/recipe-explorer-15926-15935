import React, { useEffect, useMemo, useState } from "react";
import "./styles/global.css";
import { mockRecipes, mockUser as defaultUser } from "./data/mockData";
import Header from "./components/Header";
import Recipes from "./pages/Recipes";
import Favorites from "./pages/Favorites";
import RecipeDetails from "./pages/RecipeDetails";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import { getFavorites, setFavorites, getUser, setUser, clearUser } from "./utils/storage";

// PUBLIC_INTERFACE
function App() {
  /** Root component handling navigation, auth, favorites, and search state. */
  const [route, setRoute] = useState("home"); // 'home' | 'favorites' | 'profile' | 'details' | 'signin'
  const [recipes] = useState(mockRecipes);
  const [query, setQuery] = useState("");
  const [favorites, updateFavorites] = useState(getFavorites());
  const [currentUser, setCurrentUser] = useState(getUser());
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setFavorites(favorites);
  }, [favorites]);

  const selectedRecipe = useMemo(
    () => recipes.find((r) => r.id === selectedId) || null,
    [recipes, selectedId]
  );

  const toggleFavorite = (id) => {
    updateFavorites((prev) => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter((x) => x !== id) : [...prev, id];
      return next;
    });
  };

  const openRecipe = (id) => {
    setSelectedId(id);
    setRoute("details");
    window.scrollTo(0, 0);
  };

  const handleNavigate = (to) => {
    setRoute(to);
    if (to !== "details") {
      setSelectedId(null);
    }
  };

  const handleSignInSuccess = (userPartial) => {
    const user = {
      id: "local",
      name: userPartial.name || defaultUser.name,
      email: userPartial.email || defaultUser.email,
      avatar: userPartial.avatar || defaultUser.avatar,
      favorites: favorites,
    };
    setCurrentUser(user);
    setUser(user);
    setRoute("home");
  };

  const handleProfileUpdate = (payload) => {
    const next = { ...(currentUser || {}), ...payload };
    setCurrentUser(next);
    setUser(next);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    clearUser();
    setRoute("signin");
  };

  // Redirect unauthenticated users to Sign In unless on Sign In page
  useEffect(() => {
    if (!currentUser && route !== "signin") {
      setRoute("signin");
    }
  }, [currentUser, route]);

  return (
    <>
      {/* Header hidden on signin for cleaner look */}
      {route !== "signin" && (
        <Header
          route={route}
          onNavigate={handleNavigate}
          favoritesCount={favorites.length}
          user={currentUser}
        />
      )}

      {route === "signin" && <SignIn onSuccess={handleSignInSuccess} />}

      {route === "home" && (
        <Recipes
          recipes={recipes}
          query={query}
          setQuery={setQuery}
          openRecipe={openRecipe}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      )}

      {route === "favorites" && (
        <Favorites
          recipes={recipes}
          favorites={favorites}
          openRecipe={openRecipe}
          toggleFavorite={toggleFavorite}
        />
      )}

      {route === "details" && (
        <RecipeDetails
          recipe={selectedRecipe}
          onBack={() => handleNavigate("home")}
          onToggleFavorite={toggleFavorite}
          isFavorite={selectedId ? favorites.includes(selectedId) : false}
        />
      )}

      {route === "profile" && (
        <Profile user={currentUser} onUpdate={handleProfileUpdate} onSignOut={handleSignOut} />
      )}
    </>
  );
}

export default App;
