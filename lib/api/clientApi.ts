import { Car } from "../../types/Car";
import { nextServer } from "./api";
import { Filters } from "../../types/Filters";


interface CarsResponse {
  cars: Car[];
  total: number;
  page: number;
  totalPages: number;
}

export async function fetchCarById(id: string): Promise<Car> {
  const res = await nextServer.get(`/cars/${id}`);
  return res.data;
}


export async function fetchBrands(): Promise<string[]> {
  const res = await nextServer.get("/brands");
  return res.data;
}


export async function fetchCars(
  filters: Filters, 
  page: number = 1, 
  limit: number = 12
): Promise<CarsResponse> {
  
  const params = new URLSearchParams({
    ...Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value !== "")
    ),
    page: page.toString(),
    limit: limit.toString()
  });
  
  const res = await nextServer.get(`/cars?${params.toString()}`);
  return res.data;
}


export async function fetchCarsByIds(ids: string[]): Promise<Car[]> {
  const cars = await Promise.all(
    ids.map(id => fetchCarById(id))
  );
  return cars;
}

