package com.proiectps.travelPlanning.service;

import com.travelPlanning.model.User;
import com.travelPlanning.repository.appUser.UserRepository;
import com.travelPlanning.service.implementation.UserServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.*;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

@SpringBootTest
@ActiveProfiles("test")
public class UserServiceTests {

    @Mock
    private UserServiceImpl userServiceImpl;
    @Mock
    private UserRepository userRepository;

    @BeforeEach
    void setUp() {
        openMocks(this);
        System.out.println("[INFO] Running user service tests!");
    }

    @Test
    void testUserCreation() {
        User user = new User();
        user.setEmail("user@test.com");
        when(userRepository.findAll()).thenReturn(Collections.singletonList(user));
        userServiceImpl = new UserServiceImpl(userRepository);
        userRepository.save(user);
        List<User> users = userRepository.findAll();
        assert(users.size() != 0);
        assert(users.get(0).getEmail().equals("user@test.com"));
        System.out.println("[INFO] Creation test passed!");
    }

    @Test
    void testUserExists() {
        User user = new User();
        user.setUsername("user1");
        when(userRepository.findAll()).thenReturn(Collections.singletonList(user));
        userServiceImpl = new UserServiceImpl(userRepository);
        userRepository.save(user);
        User foundUser = userServiceImpl.findByUsername("user1").get();
        assert(foundUser.getUsername().equals("user1"));
    }

    @Test
    void testUserDoesNotExist() {
        User user = new User();
        user.setUsername("user1");
        when(userRepository.findAll()).thenReturn(Collections.singletonList(user));
        userServiceImpl = new UserServiceImpl(userRepository);
        userRepository.save(user);
        Exception exception = assertThrows(NoSuchElementException.class, () -> userServiceImpl.findByUsername("user2").get());
        assert(Objects.nonNull(exception));
    }

    @Test
    void testUserLogin() {
        User user = new User();
        user.setUsername("user1");
        user.setPassword("pass1");
        when(userRepository.findAll()).thenReturn(Collections.singletonList(user));
        userServiceImpl = new UserServiceImpl(userRepository);
        userRepository.save(user);
        User foundUser = userServiceImpl.findByUsername("user1").get();
        Assertions.assertEquals("pass1", foundUser.getPassword());
        Assertions.assertNotEquals("pass2", foundUser.getPassword());
    }

}
