package com.crimereport.dashboard.controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {
    @GetMapping("/summary")
    public ResponseEntity<String> getSummary() { return ResponseEntity.ok("Dashboard summary"); }
}
