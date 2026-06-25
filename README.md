# Hệ thống Tiếp nhận và Điều phối Thông tin tố giác tội phạm (Crime Report System)

Dự án này là hệ thống tiếp nhận, xử lý và điều phối các tin báo tội phạm. Dự án được xây dựng dựa trên kiến trúc Microservices.

## Yêu cầu cài đặt
- Docker & Docker Compose
- Java 21 (Nếu chạy local)
- Maven (Nếu chạy local)
- Node.js 20+ (Nếu chạy local frontend)

## Cách chạy toàn bộ hệ thống (Docker Compose)
1. Copy file biến môi trường:
   ```bash
   cp .env.example .env
   ```
2. Build và khởi động các services:
   ```bash
   docker compose up --build
   ```

Khi đó hệ thống sẽ có mặt tại:
- Frontend: `http://localhost:5173`
- API Gateway: `http://localhost:8080`
- MariaDB: `localhost:3306`

## Danh sách Service & Ports
- API Gateway: `8080`
- Auth Service: `8081`
- Report Service: `8082`
- Evidence Service: `8083`
- Dispatch Service: `8084`
- Dashboard Service: `8085`
- Admin Service: `8086`

## Endpoint Health Check
- `http://localhost:8080/actuator/health`
- `http://localhost:8080/api/auth/actuator/health` (thông qua Gateway, nếu cấu hình mapping) hoặc truy cập trực tiếp các service port `8081-8086/actuator/health`.

## Thứ tự phát triển tiếp theo
1. Auth JWT thật
2. Report submission
3. Evidence upload
4. Urgency scoring
5. Dispatch assignment
6. Case locking
7. Dashboard
