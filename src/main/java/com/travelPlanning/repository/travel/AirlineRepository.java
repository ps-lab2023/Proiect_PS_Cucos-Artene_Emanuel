package com.travelPlanning.repository.travel;

import com.travelPlanning.model.Airline;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirlineRepository extends JpaRepository<Airline, Long> {
}
