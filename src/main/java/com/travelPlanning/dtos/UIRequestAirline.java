package com.travelPlanning.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Set;

@Getter
@AllArgsConstructor
public class UIRequestAirline {

    private Long id;
    private String name;
    private String websiteLink;
    private Set<UIRequestFlight> flights;
}
