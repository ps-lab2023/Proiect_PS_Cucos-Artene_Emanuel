package com.travelPlanning.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.travelPlanning.dtos.ChangePasswordData;
import com.travelPlanning.model.Role;
import com.travelPlanning.model.User;
import com.travelPlanning.payload.request.LoginRequest;
import com.travelPlanning.payload.request.SignupRequest;
import com.travelPlanning.payload.response.JwtResponse;
import com.travelPlanning.payload.response.MessageResponse;
import com.travelPlanning.repository.appUser.RoleRepository;
import com.travelPlanning.repository.appUser.UserRepository;
import com.travelPlanning.security.jwt.JwtUtils;
import com.travelPlanning.security.service.UserDetailsImpl;
import com.travelPlanning.service.RoleService;
import com.travelPlanning.service.UserService;
import com.travelPlanning.utils.RoleType;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @Autowired
    RoleService roleService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        userService.getAllUsers().stream().filter(user -> user.getUsername().equals(loginRequest.getUsername())).findFirst().ifPresent(user -> {
            user.setLogged(true);
            userRepository.save(user);
        });


        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.id(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    @PostMapping(path="/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        System.out.println(signUpRequest);
        if (userService.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userService.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        User user = User.builder()
                .username(signUpRequest.getUsername())
                .email(signUpRequest.getEmail())
                .password(encoder.encode(signUpRequest.getPassword()))
                .firstName(signUpRequest.getFirstName())
                .lastName(signUpRequest.getLastName())
                .phoneNumber(signUpRequest.getPhoneNumber())
                .birthdate(signUpRequest.getBirthdate())
                .isLogged(false)
                .build();

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null || strRoles.isEmpty()) {
            Role userRole = roleService.getRoleByName(RoleType.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin" -> {
                        Role adminRole = roleService.getRoleByName(RoleType.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);
                    }
                    default -> {
                        Role userRole = roleService.getRoleByName(RoleType.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                    }
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @GetMapping("/getCount")
    public ResponseEntity<?> getCountOfLoggedUsers(){
        return ResponseEntity.ok(userService.countLoggedUsers());
    }

    @PostMapping("/changePass")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordData data) {

        if (userService.existsByEmail(data.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        userService.getAllUsers().stream()
                .filter(u -> u.getEmail().equals(data.getEmail()))
                .findFirst()
                .ifPresent(user -> {
                    user.setPassword(encoder.encode(data.getNewPass()));
                    userRepository.save(user);
                });

        return ResponseEntity.ok(HttpStatus.OK);
    }
}
