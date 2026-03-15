import { useState, useEffect } from "react";
import FilterBar from "@/components/FiltersBar/FiltersBar";
import CarList from "../../../components/CarList/CarList";
import { useState, useEffect } from "react";
import FilterBar from "@/components/FiltersBar/FiltersBar";
import CarList from "@/components/CarLists/CarLists";
import css from "./CatalogPage.module.css";
import { Car } from "@/types/Car";
import { Filters } from "@/types/Filters";
import { fetchCars } from "@/lib/api/clientApi";
import { useFilterStore } from "@/lib/store/filter";

export default function CatalogPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  const { filters, setFilters } = useFilterStore();

  useEffect(() => {
    const fetchInitial = async () => {
      setIsLoading(true);
      try {
        const filteredParams = Object.fromEntries(
          Object.entries(filters).filter(([_, value]) => value !== "")
        );
        const data = await fetchCars(filteredParams, 1);
        setCars(data.cars);
        setPage(1);
        setHasMore(data.totalPages > 1);
      } catch (error) {
        console.error("Ошибка загрузки машин:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitial();
  }, []);

  const handleSearch = async (newFilters: Filters) => {
    setFilters(newFilters);
    setPage(1);
    setIsLoading(true);
    
    try {
      const filteredParams = Object.fromEntries(
        Object.entries(newFilters).filter(([_, value]) => value !== "")
      );
      const data = await fetchCars(filteredParams, 1);
      setCars(data.cars);
      setHasMore(data.totalPages > 1);
    } catch (error) {
      console.error("Ошибка поиска:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setIsLoading(true);
    
    try {
      const filteredParams = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== "")
      );
      const data = await fetchCars(filteredParams, nextPage);
      setCars((prev) => [...prev, ...data.cars]);
      setPage(nextPage);
      setHasMore(nextPage < data.totalPages);
    } catch (error) {
      console.error("Помилка завантаження", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <section className={css.section}>
        <FilterBar filters={filters} onSearch={handleSearch} />
        
        {isLoading && <p className={css.loading}>Загрузка...</p>}
        
        <CarList cars={cars} />
        
        {hasMore && cars.length > 0 && (
          <button 
            onClick={handleLoadMore} 
            disabled={isLoading}
            className={css.buttonLoad}
          >
            {isLoading ? "Завантаження..." : "Завантажити ще"}
          </button>
        )}
      </section>
    </main>
  );
}
