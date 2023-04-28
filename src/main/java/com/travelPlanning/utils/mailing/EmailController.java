package com.travelPlanning.utils.mailing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/emails")
public class EmailController {

    @Autowired
    EmailService emailService;

    @PostMapping("/simpleMail")
    public ResponseEntity<?> sendSimpleMail(@RequestBody EmailDetails mailDetails) {
        return ResponseEntity.ok(emailService.sendSimpleMail(mailDetails));
    }
}
