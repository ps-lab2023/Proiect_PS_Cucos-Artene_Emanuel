package com.travelPlanning.service;

import com.travelPlanning.model.appUser.User;
import com.travelPlanning.model.travel.Flight;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public interface FlightService {

    Set<Flight> getFlightsByUser(User user);
}
