package com.proiectps.travelPlanning.service;

import com.travelPlanning.model.objectives.Objective;
import com.travelPlanning.repository.objectives.ObjectiveRepository;
import com.travelPlanning.service.ObjectiveService;
import com.travelPlanning.service.implementation.ObjectiveServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.Collections;
import java.util.List;
import java.util.Set;

import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

@SpringBootTest
@ActiveProfiles("test")
public class ObjectiveServiceTests {

    @Mock
    private ObjectiveService objectiveService;
    @Mock
    private ObjectiveRepository objectiveRepository;

    @BeforeEach
    void setUp() {
        openMocks(this);
        System.out.println("[INFO] Running objective service tests!");
    }

    @Test
    void testObjectiveCreation() {
        Objective objective = Objective.builder().build();
        List<Objective> beforeFoundObjectives = objectiveRepository.findAll();
        when(objectiveRepository.findAll()).thenReturn(Collections.singletonList(objective));
        assert(beforeFoundObjectives.size() == 0);
        objectiveRepository.save(objective);
        List<Objective> afterFoundObjectives = objectiveRepository.findAll();
        assert(afterFoundObjectives.size() > 0);
        System.out.println("[INFO] Creation test passed!");
    }

    @Test
    void testObjectiveDeletion() {
        Objective objective = Objective.builder().build();
        when(objectiveRepository.findAll()).thenReturn(Collections.singletonList(objective));
        List<Objective> beforeFoundObjectives = objectiveRepository.findAll();
        assert(beforeFoundObjectives.size() != 0);
        when(objectiveRepository.findAll()).thenReturn(Collections.emptyList());
        objectiveRepository.delete(objective);
        List<Objective> afterFoundObjectives = objectiveRepository.findAll();
        assert(beforeFoundObjectives.size() != afterFoundObjectives.size());
        System.out.println("[INFO] Deletion test passed!");
    }

    @Test
    void testFindObjectiveByCity() {
        Objective o1 = new Objective();
        Objective o2 = new Objective();
        Objective o3 = new Objective();
        o1.setCity("c1");
        o2.setCity("c1");
        o3.setCity("c2");
        when(objectiveRepository.findAll()).thenReturn(List.of(o1, o2, o3));
        objectiveService = new ObjectiveServiceImpl(objectiveRepository);
        objectiveRepository.saveAll(List.of(o1, o2, o3));
        Set<Objective> objectiveWithQueriedCity = objectiveService.getObjectivesByCity("c1");
        assert(objectiveWithQueriedCity.size() != 0);
        for(Objective objective: objectiveWithQueriedCity){
            assert(objective.getCity().equals("c1"));
        }
        System.out.println("[INFO] Find objective by city test passed!");
    }
}
