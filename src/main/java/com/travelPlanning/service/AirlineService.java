package com.travelPlanning.service;

import com.travelPlanning.model.travel.Airline;
import com.travelPlanning.model.travel.Flight;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public interface AirlineService {

    Optional<Airline> getAirlineByFlight(Flight flight);
}
