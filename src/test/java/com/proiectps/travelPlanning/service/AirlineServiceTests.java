package com.proiectps.travelPlanning.service;

import com.travelPlanning.model.travel.Airline;
import com.travelPlanning.model.travel.Flight;
import com.travelPlanning.repository.travel.AirlineRepository;
import com.travelPlanning.service.AirlineService;
import com.travelPlanning.service.implementation.AirlineServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

@SpringBootTest
@ActiveProfiles("test")
public class AirlineServiceTests {

    @Mock
    private AirlineService airlineService;
    @Mock
    private AirlineRepository airlineRepository;

    @BeforeEach
    void setUp() {
        openMocks(this);
        System.out.println("[INFO] Running airline service tests!");
    }

    @Test
    void testAirlineCreation() {
        Airline airline = Airline.builder().build();
        List<Airline> beforeFoundAirlines = airlineRepository.findAll();
        when(airlineRepository.findAll()).thenReturn(Collections.singletonList(airline));
        assert(beforeFoundAirlines.size() == 0);
        airlineRepository.save(airline);
        List<Airline> afterFoundAirlines = airlineRepository.findAll();
        assert(afterFoundAirlines.size() > 0);
        System.out.println("[INFO] Creation test passed!");
    }

    @Test
    void testAirlineDeletion() {
        Airline airport = Airline.builder().build();
        when(airlineRepository.findAll()).thenReturn(Collections.singletonList(airport));
        List<Airline> beforeFoundAirlines = airlineRepository.findAll();
        assert(beforeFoundAirlines.size() != 0);
        when(airlineRepository.findAll()).thenReturn(Collections.emptyList());
        airlineRepository.delete(airport);
        List<Airline> afterFoundAirlines = airlineRepository.findAll();
        assert(beforeFoundAirlines.size() != afterFoundAirlines.size());
        System.out.println("[INFO] Deletion test passed!");
    }

    @Test
    void testFindAirlineByFlight() {
        Airline a1 = new Airline();
        Airline a2 = new Airline();
        Airline a3 = new Airline();
        Flight f1 = new Flight();
        Flight f2 = new Flight();
        a1.setFlights(Set.of(f1));
        a2.setFlights(Set.of(f1));
        a3.setFlights(Set.of(f2));
        when(airlineRepository.findAll()).thenReturn(List.of(a1, a2, a3));
        airlineService = new AirlineServiceImpl(airlineRepository);
        airlineRepository.saveAll(List.of(a1, a2, a3));
        Optional<Airline> airportWithQueriedFlight = airlineService.getAirlineByFlight(f1);
        assert(airportWithQueriedFlight.isPresent());
        System.out.println("[INFO] Find airline by flight test passed!");
    }
}
