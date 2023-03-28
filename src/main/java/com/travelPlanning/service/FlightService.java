package com.travelPlanning.service;

import com.travelPlanning.model.Trip;
import com.travelPlanning.model.travel.Flight;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Component
public interface FlightService {

    Set<Flight> getFlightsByTrip(Trip trip);

    List<Flight> getAllFlights();

    void deleteFlightById(Long id);

    void updateFlight(Flight flight);
}
