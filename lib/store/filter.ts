import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Filters } from "@/types/Filters"; 

interface FilterStore {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const initialFilters: Filters = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
};

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      filters: initialFilters,
      setFilters: (newFilters) => set({ filters: newFilters }),
    }),
    {
      name: "filters-store",
    }
  )
);

