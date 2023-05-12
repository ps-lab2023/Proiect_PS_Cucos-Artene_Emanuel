package com.travelPlanning.dtos;

import com.travelPlanning.model.Flight;
import com.travelPlanning.model.Hotel;
import com.travelPlanning.model.Objective;
import com.travelPlanning.model.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Set;

@Getter
@AllArgsConstructor
public class UIRequestSaveTrip {

    private Long id;
    private String name;
    private Set<UIRequestFlight> flights;
    private Set<UIRequestHotel> hotels;
    private Set<UIRequestObjective> objectives;
}
