package com.travelPlanning.service.implementation;

import com.travelPlanning.model.Role;
import com.travelPlanning.repository.appUser.RoleRepository;
import com.travelPlanning.service.RoleService;
import com.travelPlanning.utils.RoleType;
import org.springframework.stereotype.Service;

import java.util.List;
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

    @Override
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    @Override
    public void deleteRoleById(Long id) {
        roleRepository.deleteById(id);
    }

    @Override
    public void updateRole(Role role) {
        roleRepository.deleteById(role.getId());
        roleRepository.save(role);
    }
}
