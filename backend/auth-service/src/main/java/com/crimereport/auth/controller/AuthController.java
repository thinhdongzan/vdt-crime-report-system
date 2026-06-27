package com.crimereport.auth.controller;

import com.crimereport.auth.application.service.AuthApplicationService;
import com.crimereport.auth.common.ApiResponse;
import com.crimereport.auth.dto.request.LoginRequest;
import com.crimereport.auth.dto.request.RegisterRequest;
import com.crimereport.auth.dto.response.AuthResponse;
import com.crimereport.auth.dto.response.CurrentUserResponse;
import com.crimereport.auth.dto.response.UserSummaryResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthApplicationService authService;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<AuthResponse>> register(@Valid @RequestBody RegisterRequest request) {
        return ResponseEntity.ok(ApiResponse.success(authService.register(request)));
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthResponse>> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(ApiResponse.success(authService.login(request)));
    }

    @GetMapping("/me")
    public ResponseEntity<ApiResponse<CurrentUserResponse>> getCurrentUser(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(ApiResponse.success(authService.getCurrentUser(userDetails.getUsername())));
    }

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("auth-service is running");
    }

    @GetMapping("/internal/users/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'DUTY_OFFICER', 'INVESTIGATOR', 'COMMANDER')")
    public ResponseEntity<ApiResponse<UserSummaryResponse>> getUserSummary(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(authService.getUserSummary(id)));
    }
}
