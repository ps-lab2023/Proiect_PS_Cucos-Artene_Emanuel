package com.travelPlanning.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UIRequestRoom {

    private Long id;
    private String roomNumber;
    private boolean isAvailable;
    private Long hotel;
}
