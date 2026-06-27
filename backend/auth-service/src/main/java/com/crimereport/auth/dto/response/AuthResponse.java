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
