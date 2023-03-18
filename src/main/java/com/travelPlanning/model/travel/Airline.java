package com.travelPlanning.model.travel;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Set;

@Entity
@Table(name = "airlines")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Airline {
    @Id
    private Long id;

    @Column
    private String name;

    @Column
    private String websiteLink;

    @OneToMany(mappedBy = "airline")
    private Set<Flight> flights;
}
