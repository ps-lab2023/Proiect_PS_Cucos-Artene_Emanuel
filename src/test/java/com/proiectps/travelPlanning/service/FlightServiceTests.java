package com.proiectps.travelPlanning.service;

import com.travelPlanning.model.Trip;
import com.travelPlanning.model.Flight;
import com.travelPlanning.repository.travel.FlightRepository;
import com.travelPlanning.service.FlightService;
import com.travelPlanning.service.implementation.FlightServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.Collections;
import java.util.List;
import java.util.Set;

import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

@SpringBootTest
@ActiveProfiles("test")
public class FlightServiceTests {

    @Mock
    private FlightService flightService;
    @Mock
    private FlightRepository flightRepository;

    @BeforeEach
    void setUp() {
        openMocks(this);
        System.out.println("[INFO] Running flight service tests!");
    }

    @Test
    void testFlightCreation() {
        Flight flight = Flight.builder().build();
        List<Flight> beforeFoundFlights = flightRepository.findAll();
        when(flightRepository.findAll()).thenReturn(Collections.singletonList(flight));
        assert(beforeFoundFlights.size() == 0);
        flightRepository.save(flight);
        List<Flight> afterFoundFlights = flightRepository.findAll();
        assert(afterFoundFlights.size() > 0);
        System.out.println("[INFO] Creation test passed!");
    }

    @Test
    void testFlightDeletion() {
        Flight flight = Flight.builder().build();
        when(flightRepository.findAll()).thenReturn(Collections.singletonList(flight));
        List<Flight> beforeFoundFlight = flightRepository.findAll();
        assert(beforeFoundFlight.size() != 0);
        when(flightRepository.findAll()).thenReturn(Collections.emptyList());
        flightRepository.delete(flight);
        List<Flight> afterFoundFlight = flightRepository.findAll();
        assert(beforeFoundFlight.size() != afterFoundFlight.size());
        System.out.println("[INFO] Deletion test passed!");
    }

    @Test
    void testFindFlightsByTrip() {
        Flight f1 = new Flight();
        Flight f2 = new Flight();
        Flight f3 = new Flight();
        Trip t1 = new Trip();
        Trip t2 = new Trip();
        f1.setTrips(Set.of(t1));
        f2.setTrips(Set.of(t1));
        f3.setTrips(Set.of(t2));
        when(flightRepository.findAll()).thenReturn(List.of(f1, f2, f3));
        flightService = new FlightServiceImpl(flightRepository);
        flightRepository.saveAll(List.of(f1, f2, f3));
        Set<Flight> flightsWithQueriedCity = flightService.getFlightsByTrip(t1);
        assert(flightsWithQueriedCity.size() != 0);
        for(Flight flight: flightsWithQueriedCity){
            assert(flight.getTrips().stream().anyMatch(trip -> trip.equals(t1)));
        }
        System.out.println("[INFO] Find flight by trip test passed!");
    }
}
