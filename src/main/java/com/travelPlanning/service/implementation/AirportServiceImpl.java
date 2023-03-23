package com.travelPlanning.service.implementation;

import com.travelPlanning.model.travel.Airport;
import com.travelPlanning.model.travel.Flight;
import com.travelPlanning.repository.travel.AirportRepository;
import com.travelPlanning.service.AirportService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AirportServiceImpl implements AirportService {

    private final AirportRepository airportRepository;

    public AirportServiceImpl(AirportRepository airportRepository) {
        this.airportRepository = airportRepository;
    }


    @Override
    public Optional<Airport> getArrivalAirportByFlight(Flight flight) {
        return airportRepository.findAll().stream()
                .filter(airport -> airport.getArrivalFlights().stream().anyMatch(flight1 -> flight1.equals(flight)))
                .findFirst();
    }
}
