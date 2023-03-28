package com.travelPlanning.service;

import com.travelPlanning.model.hospitality.Room;
import org.springframework.stereotype.Component;

import javax.management.BadAttributeValueExpException;
import java.util.List;

@Component
public interface RoomService {

    void updateRoomNumber(Room room, String newNumber) throws BadAttributeValueExpException;

    List<Room> getAllRooms();

    void deleteRoomById(Long id);

    void updateRoom(Room room);
}
