package com.travelPlanning.model.travel;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Set;

@Entity
@Table(name = "airports")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Airport {

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
