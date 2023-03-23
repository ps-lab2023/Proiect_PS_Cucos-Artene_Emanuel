package com.proiectps.travelPlanning.service;

import com.travelPlanning.model.hospitality.Hotel;
import com.travelPlanning.repository.hospitality.HotelRepository;
import com.travelPlanning.service.HotelService;
import com.travelPlanning.service.implementation.HotelServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.Collections;
import java.util.List;
import java.util.Set;

import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

@SpringBootTest
@ActiveProfiles("test")
public class HotelServiceTests {

    @Mock
    private HotelService hotelService;
    @Mock
    private HotelRepository hotelRepository;

    @BeforeEach
    void setUp() {
        openMocks(this);
        System.out.println("[INFO] Running hotel service tests!");
    }

    @Test
    void testHotelCreation() {
        Hotel hotel = Hotel.builder().build();
        List<Hotel> beforeFoundHotels = hotelRepository.findAll();
        when(hotelRepository.findAll()).thenReturn(Collections.singletonList(hotel));
        assert(beforeFoundHotels.size() == 0);
        hotelRepository.save(hotel);
        List<Hotel> afterFoundHotels = hotelRepository.findAll();
        assert(afterFoundHotels.size() > 0);
        System.out.println("[INFO] Creation test passed!");
    }

    @Test
    void testHotelDeletion() {
        Hotel hotel = Hotel.builder().build();
        when(hotelRepository.findAll()).thenReturn(Collections.singletonList(hotel));
        List<Hotel> beforeFoundHotels = hotelRepository.findAll();
        assert(beforeFoundHotels.size() != 0);
        when(hotelRepository.findAll()).thenReturn(Collections.emptyList());
        hotelRepository.delete(hotel);
        List<Hotel> afterFoundHotels = hotelRepository.findAll();
        assert(beforeFoundHotels.size() != afterFoundHotels.size());
        System.out.println("[INFO] Deletion test passed!");
    }

    @Test
    void testFindHotelByCity() {
        Hotel h1 = new Hotel();
        Hotel h2 = new Hotel();
        Hotel h3 = new Hotel();
        h1.setCity("c1");
        h2.setCity("c1");
        h3.setCity("c2");
        when(hotelRepository.findAll()).thenReturn(List.of(h1, h2, h3));
        hotelService = new HotelServiceImpl(hotelRepository);
        hotelRepository.saveAll(List.of(h1, h2, h3));
        Set<Hotel> hotelWithQueriedCity = hotelService.getHotelsByCity("c1");
        assert(hotelWithQueriedCity.size() != 0);
        for(Hotel hotel: hotelWithQueriedCity){
            assert(hotel.getCity().equals("c1"));
        }
        System.out.println("[INFO] Find hotel by city test passed!");
    }
}
