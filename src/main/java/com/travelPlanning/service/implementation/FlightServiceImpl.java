package com.travelPlanning.service.implementation;

import com.travelPlanning.model.Trip;
import com.travelPlanning.model.Flight;
import com.travelPlanning.repository.travel.FlightRepository;
import com.travelPlanning.service.FlightService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class FlightServiceImpl implements FlightService {

    private final FlightRepository flightRepository;

    public FlightServiceImpl(FlightRepository flightRepository) {
        this.flightRepository = flightRepository;
    }

    @Override
    public Set<Flight> getFlightsByTrip(Trip trip) {
        return flightRepository.findAll().stream()
                .filter(flight -> flight.getTrips().stream().anyMatch(trip1 -> trip1.equals(trip)))
                .collect(Collectors.toSet());
    }

    @Override
    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

    @Override
    public void deleteFlightById(Long id) {
        flightRepository.deleteById(id);
    }

    @Override
    public void updateFlight(Flight flight) {
        flightRepository.deleteById(flight.getId());
        flightRepository.save(flight);
    }
}
