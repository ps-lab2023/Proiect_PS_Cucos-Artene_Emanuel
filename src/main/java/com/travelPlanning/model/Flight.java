package com.travelPlanning.model;

import com.travelPlanning.utils.FlightClass;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "flights")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Flight implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
