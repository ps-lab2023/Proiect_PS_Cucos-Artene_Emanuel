package com.travelPlanning.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "airports")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Airport implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String city;

    @Column
    private String country;

    @OneToMany(mappedBy = "departureAirport")
    private Set<Flight> departureFlights;

    @OneToMany(mappedBy = "arrivalAirport")
    private Set<Flight> arrivalFlights;
}
