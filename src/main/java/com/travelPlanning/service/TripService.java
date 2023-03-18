package com.travelPlanning.service;

import com.travelPlanning.model.Trip;
import com.travelPlanning.model.appUser.User;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public interface TripService {

    Set<Trip> getTripsByUser(User user);
}
