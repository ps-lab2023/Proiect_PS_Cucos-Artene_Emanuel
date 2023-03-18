package com.travelPlanning.model.hospitality;

import com.travelPlanning.model.Trip;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Set;

@Entity
@Table(name = "hotels")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Hotel {
    @Id
    private Long id;

    @Column
    private String name;

    @Column
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
