import React, { useState, useEffect } from "react";
import { carsArray } from "./Cars";
import Car from "../Car/Car";
import styles from "./SelectCar.module.css";
// import carImage from "../../img/car.jpg";
const SelectCar = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        setCars(carsArray);
    }, [cars]);
    return (
        <div className={styles.container}>
            {cars.map((car) => (
                <Car
                    key={car.id}
                    imageUrl={car.imageUrl}
                    fuel={car.fuel}
                    gear={car.gear}
                    price={car.price}
                    seats={car.seats}
                />
            ))}
        </div>
    );
};

export default SelectCar;
