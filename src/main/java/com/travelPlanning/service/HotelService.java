package com.travelPlanning.service;

import com.travelPlanning.model.Hotel;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Component
public interface HotelService {

    Set<Hotel> getHotelsByCity(String city);

    List<Hotel> getAllHotels();

    void deleteHotelById(Long id);

    void updateHotel(Hotel hotel);
}
