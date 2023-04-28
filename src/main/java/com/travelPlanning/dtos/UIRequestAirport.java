package com.travelPlanning.dtos;

import com.travelPlanning.model.Flight;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Set;

@AllArgsConstructor
@Getter
public class UIRequestAirport {

    private Long id;
    private String city;
    private String country;
    private Set<Long> departureFlights;
    private Set<Long> arrivalFlights;
}
