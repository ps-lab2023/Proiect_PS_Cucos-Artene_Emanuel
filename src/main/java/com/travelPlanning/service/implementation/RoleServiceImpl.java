package com.travelPlanning.service.implementation;

import com.travelPlanning.repository.appUser.RoleRepository;
import com.travelPlanning.service.RoleService;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }
}
