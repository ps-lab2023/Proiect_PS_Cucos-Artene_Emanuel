package com.travelPlanning.service.implementation;

import com.travelPlanning.model.Airline;
import com.travelPlanning.model.Flight;
import com.travelPlanning.repository.travel.AirlineRepository;
import com.travelPlanning.service.AirlineService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AirlineServiceImpl implements AirlineService {

    private final AirlineRepository airlineRepository;

    public AirlineServiceImpl(AirlineRepository airlineRepository) {
        this.airlineRepository = airlineRepository;
    }

    @Override
    public Optional<Airline> getAirlineByFlight(Flight flight) {
        return airlineRepository.findAll().stream()
                .filter(airline -> airline.getFlights().stream().anyMatch(flight1 -> flight1.equals(flight)))
                .findFirst();
    }

    @Override
    public List<Airline> getAllAirlines() {
        return airlineRepository.findAll();
    }

    @Override
    public void deleteAirlineById(Long id) {
        airlineRepository.deleteById(id);
    }

    @Override
    public void updateAirline(Airline airline) {
        airlineRepository.deleteById(airline.getId());
        airlineRepository.save(airline);
    }
}
