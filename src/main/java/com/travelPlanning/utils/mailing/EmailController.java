package com.travelPlanning.utils.mailing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Random;

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

    @PostMapping("/codeMail")
    public ResponseEntity<?> sendChangePassMail(@RequestBody EmailDetails mailDetails) {
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();
        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();
        mailDetails.setMsgBody(mailDetails.getMsgBody() + generatedString);
        emailService.sendSimpleMail(mailDetails);
        return ResponseEntity.ok(generatedString);
    }
}
