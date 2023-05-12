package com.travelPlanning.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "airlines")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Airline implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @NotBlank(message = "Name is mandatory")
    private String name;

    @Column
    private String websiteLink;

    @OneToMany(mappedBy = "airline")
    private Set<Flight> flights;
}
