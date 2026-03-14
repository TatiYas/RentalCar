import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteStore = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clearFavorites: () => void;
  removeFavorite: (id: string) => void;
  addFavorite: (id: string) => void;
};

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      
      toggleFavorite: (id) => {
        const { favorites } = get();
        const isFav = favorites.includes(id);
        set({ 
          favorites: isFav 
            ? favorites.filter(f => f !== id)
            : [...favorites, id] 
        });
      },
      
      isFavorite: (id) => get().favorites.includes(id),
      
      clearFavorites: () => set({ favorites: [] }),
      
      removeFavorite: (id) => {
        set({ favorites: get().favorites.filter(f => f !== id) });
      },
      
      addFavorite: (id) => {
        const { favorites } = get();
        if (!favorites.includes(id)) {
          set({ favorites: [...favorites, id] });
        }
      }
    }),
    {
      name: "favorites-store",
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);
