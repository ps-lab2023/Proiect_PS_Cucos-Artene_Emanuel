package com.proiectps.travelPlanning.service;

import com.travelPlanning.model.Room;
import com.travelPlanning.repository.hospitality.RoomRepository;
import com.travelPlanning.service.RoomService;
import com.travelPlanning.service.implementation.RoomServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import javax.management.BadAttributeValueExpException;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

@SpringBootTest
@ActiveProfiles("test")
public class RoomServiceTests {

    @Mock
    private RoomService roomService;
    @Mock
    private RoomRepository roomRepository;

    @BeforeEach
    void setUp() {
        openMocks(this);
        System.out.println("[INFO] Running room service tests!");
    }

    @Test
    void testRoomCreation() {
        Room room = Room.builder().build();
        List<Room> beforeFoundRooms = roomRepository.findAll();
        when(roomRepository.findAll()).thenReturn(Collections.singletonList(room));
        assert(beforeFoundRooms.size() == 0);
        roomRepository.save(room);
        List<Room> afterFoundRooms = roomRepository.findAll();
        assert(afterFoundRooms.size() > 0);
        System.out.println("[INFO] Creation test passed!");
    }

    @Test
    void testRoomDeletion() {
        Room room = Room.builder().build();
        when(roomRepository.findAll()).thenReturn(Collections.singletonList(room));
        List<Room> beforeFoundRooms = roomRepository.findAll();
        assert(beforeFoundRooms.size() != 0);
        when(roomRepository.findAll()).thenReturn(Collections.emptyList());
        roomRepository.delete(room);
        List<Room> afterFoundRooms = roomRepository.findAll();
        assert(beforeFoundRooms.size() != afterFoundRooms.size());
        System.out.println("[INFO] Deletion test passed!");
    }

    @Test
    void testRoomUpdateByNumber() {
        Room Room = com.travelPlanning.model.Room.builder().id(1L).build();
        when(roomRepository.findAll()).thenReturn(Collections.singletonList(Room));
        roomService = new RoomServiceImpl(roomRepository);
        assert(Objects.isNull(Room.getRoomNumber()));
        when(roomRepository.findById(1L)).thenReturn(Optional.of(Room));
        try{
            roomService.updateRoomNumber(Room, "123");
        } catch (BadAttributeValueExpException e) {
            throw new RuntimeException(e);
        }
        assert(roomRepository.findAll().stream().findFirst().get().getRoomNumber().equals("123"));
        Exception exception = assertThrows(BadAttributeValueExpException.class, () -> roomService.updateRoomNumber(new Room(), "321"));
        assert(Objects.nonNull(exception));
        System.out.println("[INFO] Update room number test passed!");
    }
}
