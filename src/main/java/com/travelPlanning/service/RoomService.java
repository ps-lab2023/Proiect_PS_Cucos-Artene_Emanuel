package com.travelPlanning.service;

import com.travelPlanning.model.hospitality.Room;
import org.springframework.stereotype.Component;

import javax.management.BadAttributeValueExpException;

@Component
public interface RoomService {

    void updateRoomNumber(Room room, String newNumber) throws BadAttributeValueExpException;
}
