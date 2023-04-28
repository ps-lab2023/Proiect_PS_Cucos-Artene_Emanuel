package com.travelPlanning.dtos;

import com.travelPlanning.utils.FlightClass;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UIRequestFlight {

    private Long id;
    private int departureTime;
    private int arrivalTime;

    private double price;

    private FlightClass flightClass;

    private Long departureAirport;

    private Long arrivalAirport;

    private Long airline;
}
