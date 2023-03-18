package com.travelPlanning.service.implementation;

import com.travelPlanning.model.hospitality.Hotel;
import com.travelPlanning.repository.hospitality.HotelRepository;
import com.travelPlanning.service.HotelService;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class HotelServiceImpl implements HotelService {

    private final HotelRepository hotelRepository;

    public HotelServiceImpl(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }


    @Override
    public Set<Hotel> getHotelsByCity(String city) {
        return hotelRepository.findAll().stream()
                .filter(hotel -> hotel.getCity().equals(city))
                .collect(Collectors.toSet());
    }
}
