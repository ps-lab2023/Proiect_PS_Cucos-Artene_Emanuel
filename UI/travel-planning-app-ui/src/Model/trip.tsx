import {IAdminFlight} from "./flight";
import {IAdminHotel} from "./hotel";
import {IAdminObjective} from "./objective";

export interface IUserTrip{
    id?: number;
    user?: string;
    name: string;
}

export interface IModalTrip{
    id: number;
    name: string;
    hotels: Array<IAdminHotel> | [];
    flights: Array<IAdminFlight> | [];
    objectives: Array<IAdminObjective> | [];
}