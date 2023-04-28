package com.travelPlanning.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity
@Table(name = "rooms")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Room implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String roomNumber;

    @Column
    private boolean isAvailable;

    @ManyToOne
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;
}
