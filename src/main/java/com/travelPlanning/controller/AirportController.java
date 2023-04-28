package com.travelPlanning.controller;

import com.travelPlanning.dtos.UIRequestAirport;
import com.travelPlanning.model.Airport;
import com.travelPlanning.model.Flight;
import com.travelPlanning.repository.travel.AirportRepository;
import com.travelPlanning.service.AirportService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/airports")
public class AirportController {

    @Autowired
    AirportService airportService;

    @Autowired
    AirportRepository airportRepository;

    @GetMapping("/")
    public ResponseEntity<?> getAllAirports() {
        return ResponseEntity.ok(airportService.getAllAirports().stream()
                .map(airport ->
                    new UIRequestAirport(
                            airport.getId(),
                            airport.getCity(),
                            airport.getCountry(),
                            airport.getDepartureFlights().stream().map(Flight::getId).collect(Collectors.toSet()),
                            airport.getDepartureFlights().stream().map(Flight::getId).collect(Collectors.toSet())
                    )).collect(Collectors.toSet()));
    }

    @PostMapping("/add")
    public ResponseEntity<?> addAirport(@Valid @RequestBody Airport airport) {
        return ResponseEntity.ok(airportRepository.save(airport));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteAirport(@Valid @RequestBody Long airportId) {
        airportRepository.deleteById(airportId);
        return ResponseEntity.ok("Airport deleted successfully");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateAirline(@Valid @RequestBody Airport airport) {
        airportService.updateAirport(airport);
        return ResponseEntity.ok("Airport updated successfully");
    }
}
