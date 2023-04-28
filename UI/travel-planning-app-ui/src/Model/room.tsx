import { IUserHotel } from "./hotel";

export interface IAdminRoom {
    id?: number;
    isAvailable: boolean;
    roomNumber: number;
    hotel: number;
}

export interface IUserRoom {
    is_available: boolean;
    room_number: number;
    hotel: IUserHotel;
}