package com.travelPlanning.service;

import com.travelPlanning.model.appUser.Role;
import com.travelPlanning.utils.RoleType;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface RoleService {

    Optional<Role> getRoleByName(RoleType name);

    List<Role> getAllRoles();

    void deleteRoleById(Long id);

    void updateRole(Role role);
}
