package com.crimereport.report.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    @PostMapping
    public ResponseEntity<String> createReport() {
        return ResponseEntity.ok("Create report");
    }

    @GetMapping
    public ResponseEntity<String> getReports() {
        return ResponseEntity.ok("Get reports");
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<String> getReport(@PathVariable Long id) {
        return ResponseEntity.ok("Get report " + id);
    }
    
    @GetMapping("/track/{trackingCode}")
    public ResponseEntity<String> trackReport(@PathVariable String trackingCode) {
        return ResponseEntity.ok("Track " + trackingCode);
    }
    
    @PatchMapping("/{id}/receive")
    public ResponseEntity<String> receiveReport(@PathVariable Long id) {
        return ResponseEntity.ok("Receive " + id);
    }
}
