package com.crimereport.auth.dto.request;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.springframework.util.StringUtils;

@Data
public class RegisterRequest {
    @NotBlank(message = "Full name is required")
    private String fullName;

    @Email(message = "Invalid email format")
    private String email;

    private String phone;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;

    @AssertTrue(message = "Either email or phone must be provided")
    private boolean isEmailOrPhoneProvided() {
        return StringUtils.hasText(email) || StringUtils.hasText(phone);
    }
}
