package com.travelPlanning.service.implementation;

import com.travelPlanning.repository.hospitality.RoomRepository;
import com.travelPlanning.service.RoomService;
import org.springframework.stereotype.Service;

@Service
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;

    public RoomServiceImpl(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }
}
