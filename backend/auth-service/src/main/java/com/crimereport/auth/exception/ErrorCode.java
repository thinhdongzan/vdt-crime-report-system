package com.crimereport.auth.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ErrorCode {
    USER_NOT_FOUND("USER_NOT_FOUND", "User not found", HttpStatus.NOT_FOUND),
    DUPLICATE_EMAIL("DUPLICATE_EMAIL", "Email already exists", HttpStatus.BAD_REQUEST),
    DUPLICATE_PHONE("DUPLICATE_PHONE", "Phone already exists", HttpStatus.BAD_REQUEST),
    INVALID_CREDENTIALS("INVALID_CREDENTIALS", "Invalid username or password", HttpStatus.UNAUTHORIZED),
    USER_DISABLED("USER_DISABLED", "User account is disabled", HttpStatus.FORBIDDEN),
    UNAUTHORIZED("UNAUTHORIZED", "Unauthorized", HttpStatus.UNAUTHORIZED),
    FORBIDDEN("FORBIDDEN", "Forbidden access", HttpStatus.FORBIDDEN),
    VALIDATION_ERROR("VALIDATION_ERROR", "Validation failed", HttpStatus.BAD_REQUEST),
    INTERNAL_SERVER_ERROR("INTERNAL_SERVER_ERROR", "Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);

    private final String code;
    private final String message;
    private final HttpStatus status;

    ErrorCode(String code, String message, HttpStatus status) {
        this.code = code;
        this.message = message;
        this.status = status;
    }
}
