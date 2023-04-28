package com.travelPlanning.controller;

import com.travelPlanning.dtos.UIRequestFlight;
import com.travelPlanning.model.Flight;
import com.travelPlanning.repository.travel.AirlineRepository;
import com.travelPlanning.repository.travel.AirportRepository;
import com.travelPlanning.repository.travel.FlightRepository;
import com.travelPlanning.service.AirportService;
import com.travelPlanning.service.FlightService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Objects;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/flights")
public class FlightController {

    @Autowired
    FlightService flightService;

    @Autowired
    FlightRepository flightRepository;

    @Autowired
    AirportService airportService;

    @Autowired
    AirportRepository airportRepository;

    @Autowired
    AirlineRepository airlineRepository;

    @GetMapping("/")
    public ResponseEntity<?> getAllFlights() {
        return ResponseEntity.ok(flightService.getAllFlights().stream()
                .map(flight -> new UIRequestFlight(flight.getId(),
                        Objects.nonNull(flight.getDepartureTime()) ? flight.getDepartureTime().getHour() : 0,
                        Objects.nonNull(flight.getArrivalTime()) ? flight.getArrivalTime().getHour() : 0,
                        flight.getPrice(),
                        flight.getFlightClass(),
                        Objects.nonNull(flight.getDepartureAirport()) ? flight.getDepartureAirport().getId() : 0,
                        Objects.nonNull(flight.getArrivalAirport()) ? flight.getArrivalAirport().getId() : 0,
                        Objects.nonNull(flight.getAirline()) ? flight.getAirline().getId() : 0))
                .collect(Collectors.toList()));
    }

    @GetMapping("/getByTrip")
    public ResponseEntity<?> getAllFlightsByTripId(@RequestParam("tripId") String tripId) {
        return ResponseEntity.ok(flightService.getAllFlights().stream()
                        .filter(flight -> flight.getTrips().stream().anyMatch(trip -> trip.getId().equals(Long.parseLong(tripId))))
                .map(flight -> new UIRequestFlight(flight.getId(),
                        Objects.nonNull(flight.getDepartureTime()) ? flight.getDepartureTime().getHour() : 0,
                        Objects.nonNull(flight.getArrivalTime()) ? flight.getArrivalTime().getHour() : 0,
                        flight.getPrice(),
                        flight.getFlightClass(),
                        Objects.nonNull(flight.getDepartureAirport()) ? flight.getDepartureAirport().getId() : 0,
                        Objects.nonNull(flight.getArrivalAirport()) ? flight.getArrivalAirport().getId() : 0,
                        Objects.nonNull(flight.getAirline()) ? flight.getAirline().getId() : 0))
                .collect(Collectors.toList()));
    }

    @PostMapping("/add")
    public ResponseEntity<?> addFlight(@Valid @RequestBody UIRequestFlight flight) {
        Flight storeFlight = Flight.builder()
                .departureAirport(airportRepository.getById(flight.getDepartureAirport()))
                .arrivalAirport(airportRepository.getById(flight.getArrivalAirport()))
                .airline(airlineRepository.getById(flight.getAirline()))
                .flightClass(flight.getFlightClass())
                .arrivalTime(ZonedDateTime.of(2023, 5, 14, flight.getArrivalTime(), 0, 0, 0, ZoneId.of("GMT+2")))
                .price(flight.getPrice())
                .departureTime(ZonedDateTime.of(2023, 5, 14, flight.getDepartureTime(), 0, 0, 0, ZoneId.of("GMT+2")))
                .build();
        return ResponseEntity.ok(flightRepository.save(storeFlight));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteFlight(@Valid @RequestBody Long flightId) {
        flightRepository.deleteById(flightId);
        return ResponseEntity.ok("Flight deleted successfully");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateFlight(@Valid @RequestBody Flight flight) {
        flightService.updateFlight(flight);
        return ResponseEntity.ok("Flight updated successfully");
    }
}
