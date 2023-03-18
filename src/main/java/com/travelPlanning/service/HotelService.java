package com.travelPlanning.service;

import com.travelPlanning.model.hospitality.Hotel;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public interface HotelService {

    Set<Hotel> getHotelsByCity(String city);
}
