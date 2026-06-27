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
