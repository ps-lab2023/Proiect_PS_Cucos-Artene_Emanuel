package com.proiectps.travelPlanning.service;

import com.travelPlanning.model.appUser.Role;
import com.travelPlanning.repository.appUser.RoleRepository;
import com.travelPlanning.service.RoleService;
import com.travelPlanning.service.implementation.RoleServiceImpl;
import com.travelPlanning.utils.RoleType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

@SpringBootTest
@ActiveProfiles("test")
public class RoleServiceTests {

    @Mock
    private RoleService roleService;
    @Mock
    private RoleRepository roleRepository;

    @BeforeEach
    void setUp() {
        openMocks(this);
        System.out.println("[INFO] Running role service tests!");
    }

    @Test
    void testRoleCreation() {
        com.travelPlanning.model.appUser.Role role = com.travelPlanning.model.appUser.Role.builder().build();
        List<com.travelPlanning.model.appUser.Role> beforeFoundRoles = roleRepository.findAll();
        when(roleRepository.findAll()).thenReturn(Collections.singletonList(role));
        assert(beforeFoundRoles.size() == 0);
        roleRepository.save(role);
        List<com.travelPlanning.model.appUser.Role> afterFoundRoles = roleRepository.findAll();
        assert(afterFoundRoles.size() > 0);
        System.out.println("[INFO] Creation test passed!");
    }

    @Test
    void testRoleDeletion() {
        com.travelPlanning.model.appUser.Role role = com.travelPlanning.model.appUser.Role.builder().build();
        when(roleRepository.findAll()).thenReturn(Collections.singletonList(role));
        List<com.travelPlanning.model.appUser.Role> beforeFoundRoles = roleRepository.findAll();
        assert(beforeFoundRoles.size() != 0);
        when(roleRepository.findAll()).thenReturn(Collections.emptyList());
        roleRepository.delete(role);
        List<com.travelPlanning.model.appUser.Role> afterFoundRoles = roleRepository.findAll();
        assert(beforeFoundRoles.size() != afterFoundRoles.size());
        System.out.println("[INFO] Deletion test passed!");
    }

    @Test
    void testFindRoleByName() {
        Role role1 = new Role();
        Role role2 = new Role();
        Role role3 = new Role();
        role1.setName(RoleType.ROLE_USER);
        role2.setName(RoleType.ROLE_USER);
        role3.setName(RoleType.ROLE_ADMIN);
        when(roleRepository.findAll()).thenReturn(List.of(role1, role2, role3));
        roleService = new RoleServiceImpl(roleRepository);
        roleRepository.saveAll(List.of(role1, role2, role3));
        Optional<Role> rolesWithQueriedName = roleService.getRoleByName(RoleType.ROLE_USER);
        assert(rolesWithQueriedName.isPresent());
        assert(rolesWithQueriedName.get().getName().equals(RoleType.ROLE_USER));
        System.out.println("[INFO] Find role by name test passed!");
    }
}
