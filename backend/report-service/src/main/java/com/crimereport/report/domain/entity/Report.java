package com.crimereport.report.domain.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "reports")
@Data
public class Report {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    
    @Enumerated(EnumType.STRING)
    private ReportStatus status;
    
    @Enumerated(EnumType.STRING)
    private UrgencyLevel urgencyLevel;
}
