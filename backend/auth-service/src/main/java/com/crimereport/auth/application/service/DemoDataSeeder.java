package com.crimereport.auth.application.service;

import com.crimereport.auth.domain.entity.User;
import com.crimereport.auth.domain.enums.RoleCode;
import com.crimereport.auth.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
public class DemoDataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        log.info("Checking demo data...");
        if (userRepository.count() == 0) {
            log.info("No users found. Seeding demo data...");
            String defaultPassword = passwordEncoder.encode("123456");

            List<User> demoUsers = List.of(
                    User.builder()
                            .fullName("Demo Citizen")
                            .email("citizen@example.com")
                            .phone("0900000001")
                            .passwordHash(defaultPassword)
                            .roleCode(RoleCode.CITIZEN)
                            .enabled(true)
                            .build(),
                    User.builder()
                            .fullName("Demo Duty Officer")
                            .email("officer@example.com")
                            .phone("0900000002")
                            .passwordHash(defaultPassword)
                            .roleCode(RoleCode.DUTY_OFFICER)
                            .unitId(1L)
                            .areaId(1L)
                            .enabled(true)
                            .build(),
                    User.builder()
                            .fullName("Demo Investigator")
                            .email("investigator@example.com")
                            .phone("0900000003")
                            .passwordHash(defaultPassword)
                            .roleCode(RoleCode.INVESTIGATOR)
                            .unitId(1L)
                            .areaId(1L)
                            .enabled(true)
                            .build(),
                    User.builder()
                            .fullName("Demo Commander")
                            .email("commander@example.com")
                            .phone("0900000004")
                            .passwordHash(defaultPassword)
                            .roleCode(RoleCode.COMMANDER)
                            .enabled(true)
                            .build(),
                    User.builder()
                            .fullName("Demo Admin")
                            .email("admin@example.com")
                            .phone("0900000005")
                            .passwordHash(defaultPassword)
                            .roleCode(RoleCode.ADMIN)
                            .enabled(true)
                            .build()
            );

            userRepository.saveAll(demoUsers);
            log.info("Demo data seeded successfully.");
        }
    }
}
