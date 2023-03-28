package com.travelPlanning.service;

import com.travelPlanning.model.Trip;
import com.travelPlanning.model.appUser.User;
import org.springframework.stereotype.Component;
import javax.management.BadAttributeValueExpException;
import java.util.List;
import java.util.Set;

@Component
public interface TripService {

    Set<Trip> getTripsByUser(User user);

    void updateTripName(Trip trip, String newName) throws BadAttributeValueExpException;

    List<Trip> getAllTrips();

    void deleteTripById(Long id);

    void updateTrip(Trip trip);
}
