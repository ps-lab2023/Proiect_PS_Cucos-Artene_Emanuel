package com.travelPlanning.controller;

import com.travelPlanning.dtos.UIRequestAirline;
import com.travelPlanning.dtos.UIRequestFlight;
import com.travelPlanning.model.Airline;
import com.travelPlanning.repository.travel.AirlineRepository;
import com.travelPlanning.service.implementation.AirlineServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/airlines")
public class AirlineController {

    @Autowired
    AirlineServiceImpl airlineService;

    @Autowired
    AirlineRepository airlineRepository;

    @GetMapping("/")
    public ResponseEntity<?> getAllAirlines() {
        return ResponseEntity.ok(airlineService.getAllAirlines().stream()
                .map(airline -> new UIRequestAirline(
                        airline.getId(),
                        airline.getName(),
                        airline.getWebsiteLink(),
                        airline.getFlights().stream()
                                .map(flight -> new UIRequestFlight(
                                        flight.getId(),
                                        flight.getDepartureTime().getHour(),
                                        flight.getArrivalTime().getHour(),
                                        flight.getPrice(),
                                        flight.getFlightClass(),
                                        flight.getDepartureAirport().getId(),
                                        flight.getArrivalAirport().getId(),
                                        flight.getAirline().getId()
                                )).collect(Collectors.toSet())
                )));
    }

    @PostMapping("/add")
    public ResponseEntity<?> addAirline(@Valid @RequestBody Airline airline) {
        return ResponseEntity.ok(airlineRepository.save(airline));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteAirline(@Valid @RequestBody Long airlineId) {
        airlineRepository.deleteById(airlineId);
        return ResponseEntity.ok("Airline deleted successfully");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateAirline(@Valid @RequestBody Airline airline) {
        airlineService.updateAirline(airline);
        return ResponseEntity.ok("Airline updated successfully");
    }
}
