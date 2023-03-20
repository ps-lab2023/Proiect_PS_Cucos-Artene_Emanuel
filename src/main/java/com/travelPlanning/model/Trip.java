package com.travelPlanning.model;

import com.travelPlanning.model.appUser.User;
import com.travelPlanning.model.hospitality.Hotel;
import com.travelPlanning.model.objectives.Objective;
import com.travelPlanning.model.travel.Flight;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Set;

@Entity
@Table(name = "trips")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany()
    @JoinColumn
    private Set<Flight> flights;

    @ManyToMany()
    @JoinColumn
    private Set<Hotel> hotels;

    @ManyToMany()
    @JoinColumn
    private Set<Objective> objectives;
}
