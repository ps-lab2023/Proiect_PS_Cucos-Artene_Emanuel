package com.travelPlanning.controller;

import com.travelPlanning.dtos.UIRequestObjective;
import com.travelPlanning.model.Objective;
import com.travelPlanning.model.Trip;
import com.travelPlanning.repository.objectives.ObjectiveRepository;
import com.travelPlanning.service.ObjectiveService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/objectives")
public class ObjectiveController {

    @Autowired
    ObjectiveService objectiveService;

    @Autowired
    ObjectiveRepository objectiveRepository;

    @GetMapping("/")
    public ResponseEntity<?> getAllObjectives() {
        return ResponseEntity.ok(objectiveService.getAllObjectives().stream()
                .map(objective -> new UIRequestObjective(
                        objective.getId(),
                        objective.getName(),
                        objective.getDescription(),
                        objective.getCity(),
                        objective.getLocation(),
                        objective.getOpeningHour().getHour(),
                        objective.getClosingHour().getHour(),
                        objective.getObjectiveType(),
                        objective.getTrips().stream().map(Trip::getId).collect(Collectors.toSet())
                )));
    }

    @GetMapping("/getByTrip")
    public ResponseEntity<?> getAllObjectivesByTrip(@RequestParam("tripId") String tripId) {
        return ResponseEntity.ok(objectiveService.getAllObjectives().stream()
                .filter(objective -> objective.getTrips().stream().anyMatch(trip -> trip.getId().equals(Long.parseLong(tripId))))
                .map(objective -> new UIRequestObjective(
                        objective.getId(),
                        objective.getName(),
                        objective.getDescription(),
                        objective.getCity(),
                        objective.getLocation(),
                        objective.getOpeningHour().getHour(),
                        objective.getClosingHour().getHour(),
                        objective.getObjectiveType(),
                        objective.getTrips().stream().map(Trip::getId).collect(Collectors.toSet())
                ))
                .collect(Collectors.toSet()));
    }

    @PostMapping("/add")
    public ResponseEntity<?> addObjective(@Valid @RequestBody Objective objective) {
        return ResponseEntity.ok(objectiveRepository.save(objective));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteObjective(@Valid @RequestBody Long objectiveId) {
        objectiveRepository.deleteById(objectiveId);
        return ResponseEntity.ok("Objective deleted successfully");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateObjective(@Valid @RequestBody Objective objective) {
        objectiveService.updateObjective(objective);
        return ResponseEntity.ok("Objective updated successfully");
    }
}
