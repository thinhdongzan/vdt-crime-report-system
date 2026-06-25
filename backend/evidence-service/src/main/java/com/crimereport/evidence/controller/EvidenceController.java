package com.crimereport.evidence.controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/evidences")
public class EvidenceController {
    @PostMapping("/upload")
    public ResponseEntity<String> upload() { return ResponseEntity.ok("Upload evidence"); }
}
