"use client";

import { useState, useEffect } from "react";
import Select from "../Select/Select";
import css from "./FiltersBar.module.css";
import { fetchBrands } from "../../lib/api/clientApi";


type Filters = {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
};

type FilterBarProps = {
  filters: Filters;
  onSearch: (filters: Filters) => void;
};

const priceOptions = ["30", "40", "50", "60", "70", "80"];

export default function FilterBar({ 
  filters, 
  onSearch 
}: FilterBarProps) {
  const [brands, setBrands] = useState<string[]>([]); 
  const [localFilters, setLocalFilters] = useState<Filters>(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const data = await fetchBrands();
        setBrands(data);
      } catch (error) {
        console.error("Failed to load brands:", error);
      }
    };
    loadBrands();
  }, []);


  const update = (key: keyof Filters, value: string) => {
    setLocalFilters((prev) => ({ 
      ...prev, 
      [key]: value || undefined 
    }));
  };

  return (
    <div className={css.container}>
      <div>
        <p className={css.params}>Car brand</p>
        <Select
          options={brands}
          value={localFilters.brand || ""}
          onChange={(v) => update("brand", v)}
          placeholder="Choose a brand"
        />
      </div>

      <div>
        <p className={css.params}>Price / 1 hour</p>
        <Select
          options={priceOptions}
          value={localFilters.rentalPrice || ""}
          onChange={(v) => update("rentalPrice", v)}
          placeholder="Choose a price"
        />
      </div>

      <div>
        <p className={css.params}>Car mileage / km</p>
        <div className={css.doubleInput}>
          <input
            placeholder="From"
            value={localFilters.minMileage || ""}
            onChange={(e) => update("minMileage", e.target.value)}
            className={css.inputField}
          />
          <div className={css.separator}></div>
          <input
            placeholder="To"
            value={localFilters.maxMileage || ""}
            onChange={(e) => update("maxMileage", e.target.value)}
            className={css.inputField}
          />
        </div>
      </div>

      <button 
        onClick={() => onSearch(localFilters)} 
        className={css.button}
      >
        Search
      </button>
    </div>
  );
}
