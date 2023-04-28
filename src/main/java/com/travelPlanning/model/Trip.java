package com.travelPlanning.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "trips")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Trip implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(mappedBy = "trips")
    private Set<Flight> flights;

    @ManyToMany(mappedBy = "trips")
    private Set<Hotel> hotels;

    @ManyToMany(mappedBy = "trips")
    private Set<Objective> objectives;
}
