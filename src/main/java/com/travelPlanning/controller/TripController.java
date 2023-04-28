package com.travelPlanning.controller;

import com.travelPlanning.dtos.UIRequestTrip;
import com.travelPlanning.model.Flight;
import com.travelPlanning.model.Hotel;
import com.travelPlanning.model.Objective;
import com.travelPlanning.model.Trip;
import com.travelPlanning.repository.TripRepository;
import com.travelPlanning.repository.hospitality.HotelRepository;
import com.travelPlanning.repository.objectives.ObjectiveRepository;
import com.travelPlanning.repository.travel.FlightRepository;
import com.travelPlanning.service.TripService;
import com.travelPlanning.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/trips")
public class TripController {

    @Autowired
    TripService tripService;

    @Autowired
    TripRepository tripRepository;

    @Autowired
    FlightRepository flightRepository;

    @Autowired
    HotelRepository hotelRepository;

    @Autowired
    ObjectiveRepository objectiveRepository;

    @Autowired
    UserService userService;

    @GetMapping("/")
    public ResponseEntity<?> getAllTripsByUser() {
        return ResponseEntity.ok(tripRepository.findAll().stream()
                .map(trip -> new UIRequestTrip(
                        trip.getId(),
                        trip.getName(),
                        trip.getUser().getUsername()
                )));
    }

    @PostMapping("/add")
    public ResponseEntity<?> addTrip(@Valid @RequestBody UIRequestTrip trip) {
        return ResponseEntity.ok(tripRepository.save(Trip.builder()
                .name(trip.getName())
                .user(userService.findByUsername(trip.getUser().replaceAll("\"", "")).get())
                .build()));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteTrip(@Valid @RequestBody Long tripId) {
        tripRepository.deleteById(tripId);
        return ResponseEntity.ok("Trip deleted successfully");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateAirline(@Valid @RequestBody Trip trip) {
        tripService.updateTrip(trip);
        return ResponseEntity.ok("Trip updated successfully");
    }

    @PutMapping("/aft")
    public ResponseEntity<?> addFlightToTrip(@RequestParam("flightId") String flightId, @RequestParam("tripId") String tripId) {
        tripRepository.findById(Long.parseLong(tripId)).ifPresent(trip -> {
            Optional<Flight> flightOpt = flightRepository.findById(Long.parseLong(flightId));
            flightOpt.ifPresent(flight -> {
                Set<Flight> tripFlights = new HashSet<>();
                Set<Trip> flightTrips = new HashSet<>();
                tripFlights.add(flight);
                flightTrips.add(trip);
                trip.setFlights(tripFlights);
                flight.setTrips(flightTrips);
                tripRepository.save(trip);
                flightRepository.save(flight);
            });
        });
        return ResponseEntity.ok("Flight added successfully to trip with id " + tripId);
    }

    @PutMapping("/aht")
    public ResponseEntity<?> addHotelToTrip(@RequestParam("hotelId") String hotelId, @RequestParam("tripId") String tripId) {
        tripRepository.findById(Long.parseLong(tripId)).ifPresent(trip -> {
            Optional<Hotel> hotelOpt = hotelRepository.findById(Long.parseLong(hotelId));
            hotelOpt.ifPresent(hotel -> {
                Set<Hotel> tripHotels = new HashSet<>();
                Set<Trip> hotelTrips = new HashSet<>();
                tripHotels.add(hotel);
                hotelTrips.add(trip);
                trip.setHotels(tripHotels);
                hotel.setTrips(hotelTrips);
                tripRepository.save(trip);
                hotelRepository.save(hotel);
            });
        });
        return ResponseEntity.ok("Hotel added successfully to trip with id " + tripId);
    }

    @PutMapping("/aot")
    public ResponseEntity<?> addObjectiveToTrip(@RequestParam("objectiveId") String objectiveId, @RequestParam("tripId") String tripId) {
        tripRepository.findById(Long.parseLong(tripId)).ifPresent(trip -> {
            Optional<Objective> objectiveOpt = objectiveRepository.findById(Long.parseLong(objectiveId));
            objectiveOpt.ifPresent(objective -> {
                Set<Objective> tripObjectives = new HashSet<>();
                Set<Trip> objectiveTrips = new HashSet<>();
                tripObjectives.add(objective);
                objectiveTrips.add(trip);
                trip.setObjectives(tripObjectives);
                objective.setTrips(objectiveTrips);
                tripRepository.save(trip);
                objectiveRepository.save(objective);
            });
        });
        return ResponseEntity.ok("Flight added successfully to trip with id " + tripId);
    }
}
