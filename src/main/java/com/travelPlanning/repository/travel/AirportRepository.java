package com.travelPlanning.repository.travel;

import com.travelPlanning.model.travel.Airline;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirportRepository extends JpaRepository<Airline, Long> {
}
