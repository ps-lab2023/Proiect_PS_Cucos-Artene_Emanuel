package com.travelPlanning.repository.appUser;

import com.travelPlanning.model.appUser.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
