package com.travelPlanning.repository.travel;

import com.travelPlanning.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightRepository extends JpaRepository<Flight, Long> {
}
