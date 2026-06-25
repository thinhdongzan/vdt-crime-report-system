package com.crimereport.dispatch.controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/dispatch")
public class DispatchController {
    @GetMapping("/suggestions")
    public ResponseEntity<String> getSuggestions(@RequestParam Long reportId) { return ResponseEntity.ok("Suggest for " + reportId); }
}
