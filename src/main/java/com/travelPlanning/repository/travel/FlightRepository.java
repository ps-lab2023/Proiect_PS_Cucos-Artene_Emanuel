package com.travelPlanning.repository.travel;

import com.travelPlanning.model.travel.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightRepository extends JpaRepository<Flight, Long> {
}
