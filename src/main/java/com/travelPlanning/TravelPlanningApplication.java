package com.travelPlanning;

import com.travelPlanning.security.WebSecurityConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication(scanBasePackages = "com.travelPlanning")
@Import({ WebSecurityConfig.class })
public class TravelPlanningApplication {

	public static void main(String[] args) {
		SpringApplication.run(TravelPlanningApplication.class, args);
	}

}
