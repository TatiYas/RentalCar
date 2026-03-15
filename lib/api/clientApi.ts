import { Car } from "../../types/Car";
import { nextServer } from "./api";
import { Filters } from "../../types/Filters";


export async function fetchCarById(id: string): Promise<Car> {
 const { data } = await nextServer.get(`/cars/${id}`);
 return data;
}


export async function fetchBrands(): Promise<string[]> {
 const { data } = await nextServer.get("/brands");
 return data;
}


export async function fetchCars(
 filters: Filters,
 page: number = 1,
 limit: number = 12
) {
 const params = new URLSearchParams();

 Object.entries(filters).forEach(([key, value]) => {
 if (value) params.append(key, value);
 });

 params.append("page", page.toString());
 params.append("limit", limit.toString());

 const { data } = await nextServer.get(`/cars?${params.toString()}`);

 return data;
}
