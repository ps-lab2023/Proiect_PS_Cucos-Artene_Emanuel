package com.travelPlanning.controller;

import com.travelPlanning.dtos.UIRequestHotel;
import com.travelPlanning.dtos.UIRequestRoom;
import com.travelPlanning.model.Hotel;
import com.travelPlanning.model.Trip;
import com.travelPlanning.repository.hospitality.HotelRepository;
import com.travelPlanning.service.HotelService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/hotels")
public class HotelController {

    @Autowired
    HotelService hotelService;

    @Autowired
    HotelRepository hotelRepository;

    @GetMapping("/")
    public ResponseEntity<?> getAllHotels() {
        return ResponseEntity.ok(hotelService.getAllHotels().stream()
                .map(hotel -> new UIRequestHotel(
                        hotel.getId(),
                        hotel.getName(),
                        hotel.getCity(),
                        hotel.getStars(),
                        hotel.getRooms().stream().map(room -> new UIRequestRoom(
                                room.getId(),
                                room.getRoomNumber(),
                                room.isAvailable(),
                                room.getHotel().getId()
                        )).collect(Collectors.toSet()),
                        hotel.getTrips().stream().map(Trip::getId).collect(Collectors.toSet())
                )));
    }

    @GetMapping("/getByTrip")
    public ResponseEntity<?> getAllHotelsByTripId(@RequestParam("tripId") String tripId) {
        return ResponseEntity.ok(hotelService.getAllHotels().stream()
                .filter(hotel -> hotel.getTrips().stream().anyMatch(trip -> trip.getId().equals(Long.parseLong(tripId))))
                .map(hotel -> new UIRequestHotel(
                        hotel.getId(),
                        hotel.getName(),
                        hotel.getCity(),
                        hotel.getStars(),
                        hotel.getRooms().stream().map(room -> new UIRequestRoom(
                                room.getId(),
                                room.getRoomNumber(),
                                room.isAvailable(),
                                room.getHotel().getId()
                        )).collect(Collectors.toSet()),
                        hotel.getTrips().stream().map(Trip::getId).collect(Collectors.toSet())
                )));
    }

    @PostMapping("/add")
    public ResponseEntity<?> addHotel(@Valid @RequestBody Hotel hotel) {
        return ResponseEntity.ok(hotelRepository.save(hotel));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteHotel(@Valid @RequestBody Long hotelId) {
        hotelRepository.deleteById(hotelId);
        return ResponseEntity.ok("Hotel deleted successfully");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateHotel(@Valid @RequestBody Hotel hotel) {
        hotelService.updateHotel(hotel);
        return ResponseEntity.ok("Hotel updated successfully");
    }
}
