package com.travelPlanning.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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
    @NotBlank(message = "City is mandatory")
    private String city;

    @Column
    @NotBlank(message = "Country is mandatory")
    private String country;

    @OneToMany(mappedBy = "departureAirport")
    private Set<Flight> departureFlights;

    @OneToMany(mappedBy = "arrivalAirport")
    private Set<Flight> arrivalFlights;
}
