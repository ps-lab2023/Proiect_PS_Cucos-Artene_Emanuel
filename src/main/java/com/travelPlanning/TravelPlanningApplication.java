package com.travelPlanning;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@EnableAutoConfiguration
public class TravelPlanningApplication {

	public static void main(String[] args) {
		SpringApplication.run(TravelPlanningApplication.class, args);
	}

}
