package com.travelPlanning.service.implementation;

import com.travelPlanning.model.Trip;
import com.travelPlanning.repository.TripRepository;
import com.travelPlanning.service.TripService;
import org.springframework.stereotype.Service;
import javax.management.BadAttributeValueExpException;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class TripServiceImpl implements TripService {

    private final TripRepository tripRepository;

    public TripServiceImpl(TripRepository tripRepository) {
        this.tripRepository = tripRepository;
    }

    @Override
    public Set<Trip> getTripsByUser(String username) {
        return tripRepository.findAll().stream()
                .filter(trip -> trip.getUser().getUsername().equals(username))
                .collect(Collectors.toSet());
    }

    @Override
    public void updateTripName(Trip trip, String newName) throws BadAttributeValueExpException {
        Optional<Trip> currentTripOpt = tripRepository.findById(trip.getId());
        if(currentTripOpt.isPresent()){
            Trip currentTrip = currentTripOpt.get();
            currentTrip.setName(newName);
            tripRepository.delete(trip);
            tripRepository.save(currentTrip);
        } else {
            throw new BadAttributeValueExpException(trip);
        }
    }

    @Override
    public List<Trip> getAllTrips() {
        return tripRepository.findAll();
    }

    @Override
    public void deleteTripById(Long id) {
        tripRepository.deleteById(id);
    }

    @Override
    public void updateTrip(Trip trip) {
        tripRepository.deleteById(trip.getId());
        tripRepository.save(trip);
    }
}
