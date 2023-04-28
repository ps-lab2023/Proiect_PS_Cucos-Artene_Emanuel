package com.travelPlanning.service;

import com.travelPlanning.model.Airline;
import com.travelPlanning.model.Flight;
import java.util.List;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public interface AirlineService {

    Optional<Airline> getAirlineByFlight(Flight flight);

    List<Airline> getAllAirlines();

    void deleteAirlineById(Long id);

    void updateAirline(Airline airline);
}
