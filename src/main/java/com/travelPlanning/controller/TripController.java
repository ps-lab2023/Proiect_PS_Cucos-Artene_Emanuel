package com.travelPlanning.controller;

import com.spire.pdf.PdfDocument;
import com.spire.pdf.PdfPageBase;
import com.spire.pdf.PdfPageSize;
import com.spire.pdf.graphics.*;
import com.spire.pdf.lists.PdfSortedList;
import com.spire.pdf.lists.PdfUnorderedList;
import com.travelPlanning.dtos.*;
import com.travelPlanning.model.Flight;
import com.travelPlanning.model.Hotel;
import com.travelPlanning.model.Objective;
import com.travelPlanning.model.Trip;
import com.travelPlanning.repository.TripRepository;
import com.travelPlanning.repository.hospitality.HotelRepository;
import com.travelPlanning.repository.objectives.ObjectiveRepository;
import com.travelPlanning.repository.travel.FlightRepository;
import com.travelPlanning.service.TripService;
import com.travelPlanning.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/trips")
public class TripController {

    @Autowired
    TripService tripService;

    @Autowired
    TripRepository tripRepository;

    @Autowired
    FlightRepository flightRepository;

    @Autowired
    HotelRepository hotelRepository;

    @Autowired
    ObjectiveRepository objectiveRepository;

    @Autowired
    UserService userService;

    @GetMapping("/")
    public ResponseEntity<?> getAllTripsByUser() {
        return ResponseEntity.ok(tripRepository.findAll().stream()
                .map(trip -> new UIRequestTrip(
                        trip.getId(),
                        trip.getName(),
                        trip.getUser().getUsername()
                )));
    }

    @PostMapping("/add")
    public ResponseEntity<?> addTrip(@Valid @RequestBody UIRequestTrip trip) {
        return ResponseEntity.ok(tripRepository.save(Trip.builder()
                .name(trip.getName())
                .user(userService.findByUsername(trip.getUser().replaceAll("\"", "")).get())
                .build()));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteTrip(@Valid @RequestBody Long tripId) {
        tripRepository.deleteById(tripId);
        return ResponseEntity.ok("Trip deleted successfully");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateAirline(@Valid @RequestBody Trip trip) {
        tripService.updateTrip(trip);
        return ResponseEntity.ok("Trip updated successfully");
    }

    @PutMapping("/aft")
    public ResponseEntity<?> addFlightToTrip(@RequestParam("flightId") String flightId, @RequestParam("tripId") String tripId) {
        tripRepository.findById(Long.parseLong(tripId)).ifPresent(trip -> {
            Optional<Flight> flightOpt = flightRepository.findById(Long.parseLong(flightId));
            flightOpt.ifPresent(flight -> {
                Set<Flight> tripFlights = new HashSet<>();
                Set<Trip> flightTrips = new HashSet<>();
                tripFlights.add(flight);
                flightTrips.add(trip);
                trip.setFlights(tripFlights);
                flight.setTrips(flightTrips);
                tripRepository.save(trip);
                flightRepository.save(flight);
            });
        });
        return ResponseEntity.ok("Flight added successfully to trip with id " + tripId);
    }

    @PutMapping("/aht")
    public ResponseEntity<?> addHotelToTrip(@RequestParam("hotelId") String hotelId, @RequestParam("tripId") String tripId) {
        tripRepository.findById(Long.parseLong(tripId)).ifPresent(trip -> {
            Optional<Hotel> hotelOpt = hotelRepository.findById(Long.parseLong(hotelId));
            hotelOpt.ifPresent(hotel -> {
                Set<Hotel> tripHotels = new HashSet<>();
                Set<Trip> hotelTrips = new HashSet<>();
                tripHotels.add(hotel);
                hotelTrips.add(trip);
                trip.setHotels(tripHotels);
                hotel.setTrips(hotelTrips);
                tripRepository.save(trip);
                hotelRepository.save(hotel);
            });
        });
        return ResponseEntity.ok("Hotel added successfully to trip with id " + tripId);
    }

    @PutMapping("/aot")
    public ResponseEntity<?> addObjectiveToTrip(@RequestParam("objectiveId") String objectiveId, @RequestParam("tripId") String tripId) {
        tripRepository.findById(Long.parseLong(tripId)).ifPresent(trip -> {
            Optional<Objective> objectiveOpt = objectiveRepository.findById(Long.parseLong(objectiveId));
            objectiveOpt.ifPresent(objective -> {
                Set<Objective> tripObjectives = new HashSet<>();
                Set<Trip> objectiveTrips = new HashSet<>();
                tripObjectives.add(objective);
                objectiveTrips.add(trip);
                trip.setObjectives(tripObjectives);
                objective.setTrips(objectiveTrips);
                tripRepository.save(trip);
                objectiveRepository.save(objective);
            });
        });
        return ResponseEntity.ok("Flight added successfully to trip with id " + tripId);
    }

    @PostMapping("/data")
    public ResponseEntity<?> saveTripDataInFile(@Valid @RequestBody UIRequestSaveTrip trip){
        PdfDocument doc = new PdfDocument();

        //Set the margins
        PdfMargins margins = new PdfMargins(30);

        //Add a page
        PdfPageBase page = doc.getPages().add(PdfPageSize.A4, margins);

        //Specify the initial coordinate
        float x = 0;
        float y = 0;

        //Draw title
        PdfBrush brush = PdfBrushes.getBlack();
        PdfFont titleFont = new PdfFont(PdfFontFamily.Times_Roman, 12f, PdfFontStyle.Bold);
        String title = "#" + trip.getId() + " " + trip.getName();
        page.getCanvas().drawString(title, titleFont, brush, x, y);
        y = y + (float) titleFont.measureString(title).getHeight() + 5;

        page.getCanvas().drawString("Flights", titleFont, brush, x, y);
        y += (float) titleFont.measureString(title).getHeight() + 5;

        //Draw numbered list
        PdfFont listFont = new PdfFont(PdfFontFamily.Times_Roman, 12f, PdfFontStyle.Regular);
        String flightsListContent = "";
        for(UIRequestFlight flight: trip.getFlights()){
            flightsListContent += flight.getId() + "\n";
        }
        PdfUnorderedList flightList = new PdfUnorderedList(flightsListContent.substring(0, flightsListContent.length() -1));
        flightList.setFont(listFont);
        flightList.setIndent(8);
        flightList.setTextIndent(5);
        flightList.setBrush(brush);
        flightList.draw(page, 0, y);
        y += 100;

        page.getCanvas().drawString("Hotels", titleFont, brush, x, y);

        y += (float) titleFont.measureString(title).getHeight() + 5;

        String hotelsListContent = "";
        for(UIRequestHotel hotel: trip.getHotels()){
            hotelsListContent += hotel.getName() + "\n";
        }
        PdfUnorderedList hotelList = new PdfUnorderedList(hotelsListContent.substring(0, hotelsListContent.length() - 1));
        hotelList.setFont(listFont);
        hotelList.setIndent(8);
        hotelList.setTextIndent(5);
        hotelList.setBrush(brush);
        hotelList.draw(page, 0, y);
        y += 100;

        page.getCanvas().drawString("Objectives", titleFont, brush, x, y);
        y += (float) titleFont.measureString(title).getHeight() + 5;


        String objectivesListContent = "";
        for(UIRequestObjective objective: trip.getObjectives()){
            objectivesListContent += objective.getName() + "\n";
        }
        PdfUnorderedList objectiveList = new PdfUnorderedList(objectivesListContent.substring(0, objectivesListContent.length() - 1));
        objectiveList.setFont(listFont);
        objectiveList.setIndent(8);
        objectiveList.setTextIndent(5);
        objectiveList.setBrush(brush);
        objectiveList.draw(page, 0, y);
        y += 100;

        //Save to file
        doc.saveToFile("output/" + trip.getName() + "#" + trip.getId() + ".pdf");
        return ResponseEntity.ok("Trip saved successfully");
    }
}
