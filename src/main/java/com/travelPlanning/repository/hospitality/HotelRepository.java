package com.travelPlanning.repository.hospitality;

import com.travelPlanning.model.hospitality.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
}
