const KEY = {
  FAVORITES: "rx_favorites",
  USER: "rx_user",
};

export function getFavorites() {
  try {
    const raw = localStorage.getItem(KEY.FAVORITES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function setFavorites(list) {
  try {
    localStorage.setItem(KEY.FAVORITES, JSON.stringify(list));
  } catch {}
}

export function getUser() {
  try {
    const raw = localStorage.getItem(KEY.USER);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setUser(user) {
  try {
    localStorage.setItem(KEY.USER, JSON.stringify(user));
  } catch {}
}

export function clearUser() {
  try {
    localStorage.removeItem(KEY.USER);
  } catch {}
}
