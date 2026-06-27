package com.crimereport.auth.application.service;

import com.crimereport.auth.domain.entity.Role;
import com.crimereport.auth.domain.entity.User;
import com.crimereport.auth.domain.enums.RoleCode;
import com.crimereport.auth.domain.repository.RoleRepository;
import com.crimereport.auth.domain.repository.UserRepository;
import com.crimereport.auth.dto.request.LoginRequest;
import com.crimereport.auth.dto.request.RegisterRequest;
import com.crimereport.auth.dto.response.AuthResponse;
import com.crimereport.auth.dto.response.CurrentUserResponse;
import com.crimereport.auth.dto.response.UserSummaryResponse;
import com.crimereport.auth.exception.AppException;
import com.crimereport.auth.exception.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

@Service
@RequiredArgsConstructor
public class AuthApplicationService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        if (StringUtils.hasText(request.getEmail()) && userRepository.existsByEmail(request.getEmail())) {
            throw new AppException(ErrorCode.DUPLICATE_EMAIL);
        }
        if (StringUtils.hasText(request.getPhone()) && userRepository.existsByPhone(request.getPhone())) {
            throw new AppException(ErrorCode.DUPLICATE_PHONE);
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(StringUtils.hasText(request.getEmail()) ? request.getEmail() : null)
                .phone(StringUtils.hasText(request.getPhone()) ? request.getPhone() : null)
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .roleCode(RoleCode.CITIZEN)
                .enabled(true)
                .build();

        user = userRepository.save(user);
        String token = jwtService.generateToken(user);

        return AuthResponse.builder()
                .accessToken(token)
                .userId(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .role(user.getRoleCode().name())
                .build();
    }

    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmailOrPhone(request.getUsername(), request.getUsername())
                .orElseThrow(() -> new AppException(ErrorCode.INVALID_CREDENTIALS));

        if (!user.getEnabled()) {
            throw new AppException(ErrorCode.USER_DISABLED);
        }

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
            );
        } catch (AuthenticationException e) {
            throw new AppException(ErrorCode.INVALID_CREDENTIALS);
        }

        String token = jwtService.generateToken(user);

        return AuthResponse.builder()
                .accessToken(token)
                .userId(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .role(user.getRoleCode().name())
                .unitId(user.getUnitId())
                .areaId(user.getAreaId())
                .build();
    }

    public CurrentUserResponse getCurrentUser(String username) {
        User user = userRepository.findByEmailOrPhone(username, username)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));

        return CurrentUserResponse.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .role(user.getRoleCode().name())
                .unitId(user.getUnitId())
                .areaId(user.getAreaId())
                .enabled(user.getEnabled())
                .build();
    }

    public UserSummaryResponse getUserSummary(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));

        return UserSummaryResponse.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .role(user.getRoleCode().name())
                .unitId(user.getUnitId())
                .areaId(user.getAreaId())
                .build();
    }
}
