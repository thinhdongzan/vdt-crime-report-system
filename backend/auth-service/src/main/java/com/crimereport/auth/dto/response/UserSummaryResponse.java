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
