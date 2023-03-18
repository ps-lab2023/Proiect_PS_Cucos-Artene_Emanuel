package com.travelPlanning.service.implementation;

import com.travelPlanning.repository.travel.AirportRepository;
import com.travelPlanning.service.AirportService;
import org.springframework.stereotype.Service;

@Service
public class AirportServiceImpl implements AirportService {

    private final AirportRepository airportRepository;

    public AirportServiceImpl(AirportRepository airportRepository) {
        this.airportRepository = airportRepository;
    }
}
