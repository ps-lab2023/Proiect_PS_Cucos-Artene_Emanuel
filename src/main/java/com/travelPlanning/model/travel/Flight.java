package com.travelPlanning.model.travel;

import com.travelPlanning.model.Trip;
import com.travelPlanning.model.travel.Airline;
import com.travelPlanning.model.travel.Airport;
import com.travelPlanning.utils.FlightClass;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.ZonedDateTime;
import java.util.Set;

@Entity
@Table(name = "flights")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Flight {

    @Id
    private Long id;

    @Column
    private ZonedDateTime departureTime;

    @Column
    private ZonedDateTime arrivalTime;

    @Column
    private double price;

    @Column
    private FlightClass flightClass;

    @ManyToOne
    @JoinColumn(name = "departure_airport_id")
    private Airport departureAirport;

    @ManyToOne
    @JoinColumn(name = "arrival_airport_id")
    private Airport arrivalAirport;

    @ManyToOne()
    @JoinColumn
    private Airline airline;

    @ManyToMany()
    @JoinTable(
            name = "trips_flights",
            joinColumns = @JoinColumn(name = "trip_id"),
            inverseJoinColumns = @JoinColumn(name = "flight_id")
    )
    private Set<Trip> trips;
}
