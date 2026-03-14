import { Filters } from "../../types/Filters";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FiltersStore = {
  filters: Filters;
  setFilters: (filter: Filters) => void;
  updateFilters: (partial: Partial<Filters>) => void;
  resetFilters: () => void;
  clearBrand: () => void;
  clearMileage: () => void;
};

const initialFilters: Filters = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
};

export const useFilterStore = create<FiltersStore>()(
  persist(
    (set, get) => ({
      filters: initialFilters,
      
      setFilters: (filter) => set({ filters: filter }),
      
      updateFilters: (partial) => {
        set({ filters: { ...get().filters, ...partial } });
      },
      
      resetFilters: () => set({ filters: initialFilters }),
      
      clearBrand: () => {
        set({ filters: { ...get().filters, brand: "" } });
      },
      
      clearMileage: () => {
        set({ 
          filters: { 
            ...get().filters, 
            minMileage: "", 
            maxMileage: "" 
          } 
        });
      },
    }),
    {
      name: "filters-store",
      partialize: (state) => ({ filters: state.filters }),
    }
  )
);
