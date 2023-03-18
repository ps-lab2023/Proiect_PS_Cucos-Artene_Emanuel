package com.travelPlanning.service.implementation;

import com.travelPlanning.repository.travel.AirlineRepository;
import com.travelPlanning.service.AirlineService;
import org.springframework.stereotype.Service;

@Service
public class AirlineServiceImpl implements AirlineService {

    private final AirlineRepository airlineRepository;

    public AirlineServiceImpl(AirlineRepository airlineRepository) {
        this.airlineRepository = airlineRepository;
    }
}
