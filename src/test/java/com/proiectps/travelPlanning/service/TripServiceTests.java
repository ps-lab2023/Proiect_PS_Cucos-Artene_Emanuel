package com.proiectps.travelPlanning.service;

import com.travelPlanning.model.Trip;
import com.travelPlanning.model.appUser.User;
import com.travelPlanning.repository.TripRepository;
import com.travelPlanning.service.implementation.TripServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import javax.management.BadAttributeValueExpException;
import java.util.*;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

@SpringBootTest
@ActiveProfiles("test")
public class TripServiceTests {

    @Mock
    private TripServiceImpl tripServiceImpl;
    @Mock
    private TripRepository tripRepository;

    @BeforeEach
    void setUp() {
        openMocks(this);
        System.out.println("[INFO] Running trip service tests!");
    }

    @Test
    void testTripCreation() {
        Trip trip = Trip.builder().build();
        List<Trip> beforeFoundTrips = tripRepository.findAll();
        when(tripRepository.findAll()).thenReturn(Collections.singletonList(trip));
        assert(beforeFoundTrips.size() == 0);
        tripRepository.save(trip);
        List<Trip> afterFoundTrips = tripRepository.findAll();
        assert(afterFoundTrips.size() > 0);
        System.out.println("[INFO] Creation test passed!");
    }

    @Test
    void testTripDeletion() {
        Trip trip = Trip.builder().build();
        when(tripRepository.findAll()).thenReturn(Collections.singletonList(trip));
        List<Trip> beforeFoundTrips = tripRepository.findAll();
        assert(beforeFoundTrips.size() != 0);
        when(tripRepository.findAll()).thenReturn(Collections.emptyList());
        tripRepository.delete(trip);
        List<Trip> afterFoundTrips = tripRepository.findAll();
        assert(beforeFoundTrips.size() != afterFoundTrips.size());
        System.out.println("[INFO] Deletion test passed!");
    }

    @Test
    void testTripUpdateByName() {
        Trip trip = Trip.builder().id(1L).build();
        when(tripRepository.findAll()).thenReturn(Collections.singletonList(trip));
        tripServiceImpl = new TripServiceImpl(tripRepository);
        assert(Objects.isNull(trip.getName()));
        when(tripRepository.findById(1L)).thenReturn(Optional.of(trip));
        try{
            tripServiceImpl.updateTripName(trip, "someName");
        } catch (BadAttributeValueExpException e) {
            throw new RuntimeException(e);
        }
        assert(tripRepository.findAll().stream().findFirst().get().getName().equals("someName"));
        Exception exception = assertThrows(BadAttributeValueExpException.class, () -> tripServiceImpl.updateTripName(new Trip(), "wrongName"));
        assert(Objects.nonNull(exception));
        System.out.println("[INFO] Update trip name test passed!");
    }

    @Test
    void testFindTripsByUser() {
        Trip trip1 = new Trip();
        Trip trip2 = new Trip();
        Trip trip3 = new Trip();
        User user1 = new User();
        User user2 = new User();
        trip1.setUser(user1);
        trip2.setUser(user1);
        trip3.setUser(user2);
        when(tripRepository.findAll()).thenReturn(List.of(trip1, trip2, trip3));
        tripServiceImpl = new TripServiceImpl(tripRepository);
        tripRepository.saveAll(List.of(trip1, trip2, trip3));
        Set<Trip> tripsWithQueriedUser = tripServiceImpl.getTripsByUser(user1);
        assert(tripsWithQueriedUser.size() != 0);
        for(Trip trip: tripsWithQueriedUser){
            assert(trip.getUser().equals(user1));
        }
        System.out.println("[INFO] Find trips by user test passed!");
    }
}
