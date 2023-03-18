package com.travelPlanning.service;

import com.travelPlanning.model.objectives.Objective;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public interface ObjectiveService {

    Set<Objective> getObjectivesByCity(String city);
}
