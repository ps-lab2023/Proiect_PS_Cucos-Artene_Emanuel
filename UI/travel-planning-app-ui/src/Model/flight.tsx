import { IUserAirline } from "./airline";
import { IUserAirport } from "./airport";

export interface IAdminFlight {
    id?: number;
    arrivalTime: number;
    departureTime: number;
    flightClass: number;
    price: number;
    airline: number;
    arrivalAirport: number;
    departureAirport: number;
}

export interface IUserFlight {
    arrival_time: Date;
    departure_time: Date;
    flight_class: number;
    price: number;
    airline: IUserAirline;
    arrival_airport: IUserAirport;
    departure_airport: IUserAirport;
}