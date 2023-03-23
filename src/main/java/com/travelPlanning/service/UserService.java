package com.travelPlanning.service;

import com.travelPlanning.model.appUser.User;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public interface UserService {

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}
