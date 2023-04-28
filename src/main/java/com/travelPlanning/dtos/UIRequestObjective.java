package com.travelPlanning.dtos;

import com.travelPlanning.model.Trip;
import com.travelPlanning.utils.ObjectiveTypes;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.ZonedDateTime;
import java.util.Set;

@AllArgsConstructor
@Getter
public class UIRequestObjective {

    private Long id;
    private String name;
    private String description;
    private String city;
    private String location;
    private int openingHour;
    private int closingHour;
    private ObjectiveTypes objectiveType;
    private Set<Long> trips;
}
