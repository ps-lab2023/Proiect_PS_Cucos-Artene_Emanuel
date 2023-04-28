package com.travelPlanning.controller;

import com.travelPlanning.dtos.UIRequestRoom;
import com.travelPlanning.model.Room;
import com.travelPlanning.repository.hospitality.HotelRepository;
import com.travelPlanning.repository.hospitality.RoomRepository;
import com.travelPlanning.service.RoomService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    RoomService roomService;

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    HotelRepository hotelRepository;

    @GetMapping("/")
    public ResponseEntity<?> getAllRooms() {
        return ResponseEntity.ok(roomService.getAllRooms().stream()
                .map(room -> new UIRequestRoom(
                        room.getId(),
                        Objects.nonNull(room.getRoomNumber()) ? room.getRoomNumber() : "0",
                        room.isAvailable(),
                        Objects.nonNull(room.getHotel()) ? room.getHotel().getId() : 0
                )));
    }

    @PostMapping("/add")
    public ResponseEntity<?> addRoom(@Valid @RequestBody UIRequestRoom room) {
        return ResponseEntity.ok(roomRepository.save(Room.builder()
                .roomNumber(room.getRoomNumber())
                .hotel(hotelRepository.getById(room.getHotel()))
                .isAvailable(room.isAvailable())
                .build()
        ));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteRoom(@Valid @RequestBody Long roomId) {
        roomRepository.deleteById(roomId);
        return ResponseEntity.ok("Room deleted successfully");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateRoom(@Valid @RequestBody Room room) {
        roomService.updateRoom(room);
        return ResponseEntity.ok("Room updated successfully");
    }
}
