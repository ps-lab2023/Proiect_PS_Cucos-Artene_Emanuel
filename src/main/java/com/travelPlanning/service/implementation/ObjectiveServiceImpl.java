package com.travelPlanning.service.implementation;

import com.travelPlanning.model.objectives.Objective;
import com.travelPlanning.repository.objectives.ObjectiveRepository;
import com.travelPlanning.service.ObjectiveService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ObjectiveServiceImpl implements ObjectiveService {

    private final ObjectiveRepository objectiveRepository;

    public ObjectiveServiceImpl(ObjectiveRepository objectiveRepository) {
        this.objectiveRepository = objectiveRepository;
    }

    @Override
    public Set<Objective> getObjectivesByCity(String city) {
        return objectiveRepository.findAll().stream()
                .filter(objective -> objective.getCity().equals(city))
                .collect(Collectors.toSet());
    }

    @Override
    public List<Objective> getAllObjectives() {
        return objectiveRepository.findAll();
    }

    @Override
    public void deleteObjectiveById(Long id) {
        objectiveRepository.deleteById(id);
    }

    @Override
    public void updateObjective(Objective objective) {
        objectiveRepository.deleteById(objective.getId());
        objectiveRepository.save(objective);
    }
}
