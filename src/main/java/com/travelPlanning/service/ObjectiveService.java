package com.travelPlanning.service;

import com.travelPlanning.model.Objective;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Component
public interface ObjectiveService {

    Set<Objective> getObjectivesByCity(String city);

    List<Objective> getAllObjectives();

    void deleteObjectiveById(Long id);

    void updateObjective(Objective objective);
}
