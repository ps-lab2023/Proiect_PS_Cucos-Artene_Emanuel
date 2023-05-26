package com.travelPlanning.controller;

import com.travelPlanning.dtos.UIRequestAirport;
import com.travelPlanning.model.Flight;
import com.travelPlanning.model.User;
import com.travelPlanning.service.AirportService;
import com.travelPlanning.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "/xml-output",
        produces = "application/xml")
public class XMLController {

    @Autowired
    UserService userService;

    @Autowired
    AirportService airportService;

    @GetMapping("/get")
    public ResponseEntity<?> getUserXML()
    {
        return ResponseEntity.ok(airportService.getAllAirports().stream().map(
                airport ->
                        new UIRequestAirport(
                                airport.getId(),
                                airport.getCity(),
                                airport.getCountry(),
                                airport.getDepartureFlights().stream().map(Flight::getId).collect(Collectors.toSet()),
                                airport.getDepartureFlights().stream().map(Flight::getId).collect(Collectors.toSet())
                        )).collect(Collectors.toSet())
        );
    }
}
