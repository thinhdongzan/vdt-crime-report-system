import os

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content.strip() + '\n')

BASE_PKG = "backend/auth-service/src/main/java/com/crimereport/auth"

# --- COMMON & EXCEPTION ---
write_file(f"{BASE_PKG}/common/ApiResponse.java", """
package com.crimereport.auth.common;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ApiResponse<T> {
    private boolean success;
    private String message;
    private T data;
    @Builder.Default
    private LocalDateTime timestamp = LocalDateTime.now();

    public static <T> ApiResponse<T> success(T data) {
        return ApiResponse.<T>builder().success(true).message("Success").data(data).build();
    }

    public static <T> ApiResponse<T> success(T data, String message) {
        return ApiResponse.<T>builder().success(true).message(message).data(data).build();
    }

    public static <T> ApiResponse<T> error(String message) {
        return ApiResponse.<T>builder().success(false).message(message).data(null).build();
    }
}
""")

write_file(f"{BASE_PKG}/exception/ErrorCode.java", """
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
""")

write_file(f"{BASE_PKG}/exception/AppException.java", """
package com.crimereport.auth.exception;

import lombok.Getter;

@Getter
public class AppException extends RuntimeException {
    private final ErrorCode errorCode;

    public AppException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}
""")

write_file(f"{BASE_PKG}/exception/GlobalExceptionHandler.java", """
package com.crimereport.auth.exception;

import com.crimereport.auth.common.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(AppException.class)
    public ResponseEntity<ApiResponse<Void>> handleAppException(AppException ex) {
        return ResponseEntity.status(ex.getErrorCode().getStatus())
                .body(ApiResponse.error(ex.getMessage()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Void>> handleValidationException(MethodArgumentNotValidException ex) {
        String message = ex.getBindingResult().getFieldErrors().stream()
                .map(FieldError::getDefaultMessage)
                .collect(Collectors.joining(", "));
        return ResponseEntity.status(ErrorCode.VALIDATION_ERROR.getStatus())
                .body(ApiResponse.error(ErrorCode.VALIDATION_ERROR.getMessage() + ": " + message));
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ApiResponse<Void>> handleAccessDeniedException(AccessDeniedException ex) {
        return ResponseEntity.status(ErrorCode.FORBIDDEN.getStatus())
                .body(ApiResponse.error(ErrorCode.FORBIDDEN.getMessage()));
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ApiResponse<Void>> handleAuthenticationException(AuthenticationException ex) {
        return ResponseEntity.status(ErrorCode.UNAUTHORIZED.getStatus())
                .body(ApiResponse.error(ErrorCode.UNAUTHORIZED.getMessage()));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Void>> handleGenericException(Exception ex) {
        return ResponseEntity.status(ErrorCode.INTERNAL_SERVER_ERROR.getStatus())
                .body(ApiResponse.error(ErrorCode.INTERNAL_SERVER_ERROR.getMessage()));
    }
}
""")

# --- DOMAIN ---
write_file(f"{BASE_PKG}/domain/enums/RoleCode.java", """
package com.crimereport.auth.domain.enums;

public enum RoleCode {
    CITIZEN,
    DUTY_OFFICER,
    INVESTIGATOR,
    COMMANDER,
    ADMIN
}
""")

write_file(f"{BASE_PKG}/domain/entity/Role.java", """
package com.crimereport.auth.domain.entity;

import com.crimereport.auth.domain.enums.RoleCode;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "roles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(unique = true, nullable = false)
    private RoleCode code;

    @Column(nullable = false)
    private String name;
}
""")

write_file(f"{BASE_PKG}/domain/entity/User.java", """
package com.crimereport.auth.domain.entity;

import com.crimereport.auth.domain.enums.RoleCode;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    @Column(unique = true)
    private String phone;

    @Column(unique = true)
    private String email;

    @Column(nullable = false)
    private String passwordHash;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RoleCode roleCode;

    private Long unitId;

    private Long areaId;

    @Builder.Default
    private Boolean enabled = true;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
""")

write_file(f"{BASE_PKG}/domain/repository/RoleRepository.java", """
package com.crimereport.auth.domain.repository;

import com.crimereport.auth.domain.entity.Role;
import com.crimereport.auth.domain.enums.RoleCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByCode(RoleCode code);
}
""")

write_file(f"{BASE_PKG}/domain/repository/UserRepository.java", """
package com.crimereport.auth.domain.repository;

import com.crimereport.auth.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByPhone(String phone);
    Optional<User> findByEmailOrPhone(String email, String phone);
    boolean existsByEmail(String email);
    boolean existsByPhone(String phone);
}
""")

# --- DTO ---
write_file(f"{BASE_PKG}/dto/request/RegisterRequest.java", """
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
""")

write_file(f"{BASE_PKG}/dto/request/LoginRequest.java", """
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
""")

write_file(f"{BASE_PKG}/dto/response/AuthResponse.java", """
package com.crimereport.auth.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthResponse {
    private String accessToken;
    @Builder.Default
    private String tokenType = "Bearer";
    private Long userId;
    private String fullName;
    private String email;
    private String phone;
    private String role;
    private Long unitId;
    private Long areaId;
}
""")

write_file(f"{BASE_PKG}/dto/response/CurrentUserResponse.java", """
package com.crimereport.auth.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CurrentUserResponse {
    private Long id;
    private String fullName;
    private String email;
    private String phone;
    private String role;
    private Long unitId;
    private Long areaId;
    private Boolean enabled;
}
""")

write_file(f"{BASE_PKG}/dto/response/UserSummaryResponse.java", """
package com.crimereport.auth.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserSummaryResponse {
    private Long id;
    private String fullName;
    private String email;
    private String phone;
    private String role;
    private Long unitId;
    private Long areaId;
}
""")

# --- SECURITY ---
write_file(f"{BASE_PKG}/infrastructure/security/CustomUserPrincipal.java", """
package com.crimereport.auth.infrastructure.security;

import com.crimereport.auth.domain.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Getter
@AllArgsConstructor
public class CustomUserPrincipal implements UserDetails {

    private final User user;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + user.getRoleCode().name()));
    }

    @Override
    public String getPassword() {
        return user.getPasswordHash();
    }

    @Override
    public String getUsername() {
        return user.getEmail() != null ? user.getEmail() : user.getPhone();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return user.getEnabled();
    }
}
""")

write_file(f"{BASE_PKG}/infrastructure/security/CustomUserDetailsService.java", """
package com.crimereport.auth.infrastructure.security;

import com.crimereport.auth.domain.entity.User;
import com.crimereport.auth.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmailOrPhone(username, username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
        return new CustomUserPrincipal(user);
    }

    public UserDetails loadUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with id: " + id));
        return new CustomUserPrincipal(user);
    }
}
""")

