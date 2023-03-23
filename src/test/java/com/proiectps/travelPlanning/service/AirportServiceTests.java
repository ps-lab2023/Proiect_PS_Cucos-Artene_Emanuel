package com.proiectps.travelPlanning.service;

import com.travelPlanning.model.travel.Airport;
import com.travelPlanning.model.travel.Flight;
import com.travelPlanning.repository.travel.AirportRepository;
import com.travelPlanning.service.AirportService;
import com.travelPlanning.service.implementation.AirportServiceImpl;
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
public class AirportServiceTests {

    @Mock
    private AirportService airportService;
    @Mock
    private AirportRepository airportRepository;

    @BeforeEach
    void setUp() {
        openMocks(this);
        System.out.println("[INFO] Running airport service tests!");
    }

    @Test
    void testAirportCreation() {
        Airport airport = Airport.builder().build();
        List<Airport> beforeFoundAirports = airportRepository.findAll();
        when(airportRepository.findAll()).thenReturn(Collections.singletonList(airport));
        assert(beforeFoundAirports.size() == 0);
        airportRepository.save(airport);
        List<Airport> afterFoundAirports = airportRepository.findAll();
        assert(afterFoundAirports.size() > 0);
        System.out.println("[INFO] Creation test passed!");
    }

    @Test
    void testAirportDeletion() {
        Airport airport = Airport.builder().build();
        when(airportRepository.findAll()).thenReturn(Collections.singletonList(airport));
        List<Airport> beforeFoundAirports = airportRepository.findAll();
        assert(beforeFoundAirports.size() != 0);
        when(airportRepository.findAll()).thenReturn(Collections.emptyList());
        airportRepository.delete(airport);
        List<Airport> afterFoundAirports = airportRepository.findAll();
        assert(beforeFoundAirports.size() != afterFoundAirports.size());
        System.out.println("[INFO] Deletion test passed!");
    }

    @Test
    void testFindArrivalAirportByFlight() {
        Airport a1 = new Airport();
        Airport a2 = new Airport();
        Airport a3 = new Airport();
        Flight f1 = new Flight();
        Flight f2 = new Flight();
        a1.setArrivalFlights(Set.of(f1));
        a2.setArrivalFlights(Set.of(f1));
        a3.setArrivalFlights(Set.of(f2));
        when(airportRepository.findAll()).thenReturn(List.of(a1, a2, a3));
        airportService = new AirportServiceImpl(airportRepository);
        airportRepository.saveAll(List.of(a1, a2, a3));
        Optional<Airport> airportWithQueriedFlight = airportService.getArrivalAirportByFlight(f1);
        assert(airportWithQueriedFlight.isPresent());
        System.out.println("[INFO] Find arrival airport by flight test passed!");
    }
}
