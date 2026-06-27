CREATE TABLE roles (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(30) UNIQUE NULL,
    email VARCHAR(255) UNIQUE NULL,
    password_hash VARCHAR(255) NOT NULL,
    role_code VARCHAR(50) NOT NULL,
    unit_id BIGINT NULL,
    area_id BIGINT NULL,
    enabled BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO roles (code, name) VALUES 
('CITIZEN', 'Người dân'),
('DUTY_OFFICER', 'Cán bộ trực ban'),
('INVESTIGATOR', 'Điều tra viên'),
('COMMANDER', 'Chỉ huy trung tâm'),
('ADMIN', 'Quản trị viên');
