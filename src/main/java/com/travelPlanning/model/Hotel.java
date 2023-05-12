package com.travelPlanning.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "hotels")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Hotel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @NotBlank(message = "Name is mandatory")
    private String name;

    @Column
    @NotBlank(message = "City is mandatory")
    private String city;

    @Column
    private int stars;

    @OneToMany(mappedBy = "hotel")
    private Set<Room> rooms;

    @ManyToMany()
    @JoinTable(
            name = "trips_hotels",
            joinColumns = @JoinColumn(name = "trip_id"),
            inverseJoinColumns = @JoinColumn(name = "hotel_id")
    )
    private Set<Trip> trips;
}
