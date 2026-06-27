package com.crimereport.auth.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginRequest {
    @NotBlank(message = "Username (email/phone) is required")
    private String username;

    @NotBlank(message = "Password is required")
    private String password;
}
