package com.travelPlanning.repository.travel;

import com.travelPlanning.model.Airport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirportRepository extends JpaRepository<Airport, Long> {
}
