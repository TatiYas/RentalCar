"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchCarById } from "../../../lib/api/clientApi";
import css from "./CarDetails.module.css";
import Image from "next/image";
import CarForm from "../../../components/CarForm/CarForm";

const spritePath = "/public/sprite.svg";

type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  img: string;
  address: string;
  rentalPrice: number | string;
  description: string;
  type: string;
  mileage: number;
  rentalConditions: string[];
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
};

export default function CarDetailsClient() {
  const { id } = useParams<{ id: string }>();

  
  const queryResult = useQuery({
    queryKey: ["car", id],
    queryFn: () => fetchCarById(id as string),
    refetchOnMount: false,
  });

  if (queryResult.isLoading) return <p className={css.loading}>Loading...</p>;
  if (queryResult.isError) return <p className={css.error}>Error loading car</p>;
  if (!queryResult.data) return <p className={css.notFound}>Car not found</p>;


  const car = queryResult.data;

  return (
    <section className={css.carPage}>
      <div className={css.container}>
        <div className={css.photoAndForm}>
          <Image
            src={car.img}
            width={700}
            height={268}
            className={css.carImage}
            alt={`${car.brand} ${car.model}`}
          />
          <CarForm />
        </div>

        <div>
          <div className={css.carMainInfo}>
            <div className={css.carPreview}>
              <h2 className={css.carTitle}>{`${car.brand} ${car.model}, ${car.year}`}</h2>
              <p className={css.carId}>id: {car.id}</p>
            </div>
            <div className={css.carLocation}>
              <svg width="16" height="16">
                <use href={`${spritePath}#icon-location`} />
              </svg>
              <p className={css.carAddress}>{car.address}</p>
              <p>Mileage: {new Intl.NumberFormat("uk-UA").format(car.mileage)} km</p>
            </div>
            <p className={css.carPrice}>${car.rentalPrice}</p>
            <p className={css.carDescription}>{car.description}</p>
          </div>

          <div className={css.carSecondInfo}>
            <div>
              <p className={css.carInfoTitle}>Rental Conditions:</p>
              <ul className={css.carInfoContainer}>
                {car.rentalConditions.map((item: string, idx: number) => (
                  <li key={idx} className={css.carInfoItem}>
                    <svg width="16" height="16">
                      <use href={`${spritePath}#icon-confirm`} />
                    </svg>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className={css.carInfoTitle}>Car Specifications:</p>
              <ul className={css.carInfoContainer}>
                <li className={css.carInfoItem}>
                  <svg width="16" height="16"><use href={`${spritePath}#icon-calendar`} /></svg>
                  <p>Year: {car.year}</p>
                </li>
                <li className={css.carInfoItem}>
                  <svg width="16" height="16"><use href={`${spritePath}#icon-auto`} /></svg>
                  <p>Type: {car.type}</p>
                </li>
                <li className={css.carInfoItem}>
                  <svg width="16" height="16"><use href={`${spritePath}#icon-gas`} /></svg>
                  <p>Fuel Consumption: {car.fuelConsumption}</p>
                </li>
                <li className={css.carInfoItem}>
                  <svg width="16" height="16"><use href={`${spritePath}#icon-setting`} /></svg>
                  <p>Engine Size: {car.engineSize}</p>
                </li>
              </ul>
            </div>

            <div>
              <p className={css.carInfoTitle}>Accessories and functionalities:</p>
              <ul className={css.carInfoContainer}>
                {[...car.accessories, ...car.functionalities].map((item: string, idx: number) => (
                  <li key={idx} className={css.carInfoItem}>
                    <svg width="16" height="16">
                      <use href={`${spritePath}#icon-confirm`} />
                    </svg>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
