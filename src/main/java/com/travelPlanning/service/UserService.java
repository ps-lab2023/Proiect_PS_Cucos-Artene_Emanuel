package com.travelPlanning.service;

import com.travelPlanning.model.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface UserService {

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    List<User> getAllUsers();

    void deleteUserById(Long id);

    void updateUser(User user);

    long countLoggedUsers();
}
