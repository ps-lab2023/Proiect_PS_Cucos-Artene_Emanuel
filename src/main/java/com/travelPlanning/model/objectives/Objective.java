package com.travelPlanning.model.objectives;

import com.travelPlanning.model.Trip;
import com.travelPlanning.utils.ObjectiveTypes;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.ZonedDateTime;
import java.util.Set;

@Entity
@Table(name = "objectives")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Objective {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String city;

    @Column
    private String location;

    @Column
    private ZonedDateTime openingHour;

    @Column
    private ZonedDateTime closingHour;

    @Column
    private ObjectiveTypes objectiveType;

    @ManyToMany()
    @JoinTable(
            name = "trips_objectives",
            joinColumns = @JoinColumn(name = "trip_id"),
            inverseJoinColumns = @JoinColumn(name = "objective_id")
    )
    private Set<Trip> trips;
}
