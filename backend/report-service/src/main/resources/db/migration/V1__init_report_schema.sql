CREATE TABLE reports (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    status VARCHAR(50),
    urgency_level VARCHAR(50)
);
