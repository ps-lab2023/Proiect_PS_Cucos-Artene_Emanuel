package com.travelPlanning.service.implementation;

import com.travelPlanning.model.appUser.Role;
import com.travelPlanning.repository.appUser.RoleRepository;
import com.travelPlanning.service.RoleService;
import com.travelPlanning.utils.RoleType;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Optional<Role> getRoleByName(RoleType name) {
        return roleRepository.findAll().stream()
                .filter(role -> role.getName().equals(name))
                .findFirst();
    }
}
