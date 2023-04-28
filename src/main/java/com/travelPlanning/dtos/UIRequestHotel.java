package com.travelPlanning.dtos;

import com.travelPlanning.model.Room;
import com.travelPlanning.model.Trip;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Set;

@AllArgsConstructor
@Getter
public class UIRequestHotel {

    private Long id;
    private String name;
    private String city;
    private int stars;
    private Set<UIRequestRoom> rooms;
    private Set<Long> trips;
}
