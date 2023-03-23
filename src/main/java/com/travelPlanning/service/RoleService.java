package com.travelPlanning.service;

import com.travelPlanning.model.appUser.Role;
import com.travelPlanning.utils.RoleType;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public interface RoleService {

    Optional<Role> getRoleByName(RoleType name);
}
