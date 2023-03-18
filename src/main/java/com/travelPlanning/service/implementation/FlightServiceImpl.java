package com.travelPlanning.service.implementation;

import com.travelPlanning.model.appUser.User;
import com.travelPlanning.model.travel.Flight;
import com.travelPlanning.repository.travel.FlightRepository;
import com.travelPlanning.service.FlightService;

import java.util.Set;
import java.util.stream.Collectors;

public class FlightServiceImpl implements FlightService {

    private final FlightRepository flightRepository;

    public FlightServiceImpl(FlightRepository flightRepository) {
        this.flightRepository = flightRepository;
    }

    @Override
    public Set<Flight> getFlightsByUser(User user) {
        return flightRepository.findAll().stream()
                .filter(flight -> flight.getTrips().stream()
                        .anyMatch(trip -> trip.getUser().equals(user)))
                .collect(Collectors.toSet());
    }
}
