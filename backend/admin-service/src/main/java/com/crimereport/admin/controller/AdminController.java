package com.crimereport.admin.controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @GetMapping("/crime-types")
    public ResponseEntity<String> getCrimeTypes() { return ResponseEntity.ok("Crime Types"); }
}
