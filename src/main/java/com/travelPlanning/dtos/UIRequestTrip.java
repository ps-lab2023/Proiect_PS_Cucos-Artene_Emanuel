package com.travelPlanning.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UIRequestTrip {

    private Long id;
    private String name;
    private String user;
}
