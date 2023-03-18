package com.travelPlanning.repository.objectives;

import com.travelPlanning.model.objectives.Objective;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ObjectiveRepository extends JpaRepository<Objective, Long> {
}
