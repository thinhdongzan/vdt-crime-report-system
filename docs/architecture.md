# Kiến trúc Hệ thống (Architecture)

## Tổng quan
Hệ thống tuân theo kiến trúc Microservices với một API Gateway đứng trước đóng vai trò như là điểm vào duy nhất (Single Point of Entry) cho các client.

## Danh sách Microservices
1. **API Gateway**: Định tuyến request (Routing), CORS, Rate Limiting (tương lai).
2. **Auth Service**: Quản lý người dùng, phân quyền (Role-Based Access Control), JWT Token.
3. **Report Service**: Core domain của hệ thống. Quản lý trạng thái tin báo, mã theo dõi, chấm điểm nguy cấp, khóa hồ sơ tạm thời.
4. **Evidence Service**: Quản lý tệp đính kèm, hình ảnh, video bằng chứng.
5. **Dispatch Service**: Quản lý điều phối, gợi ý đơn vị hoặc điều tra viên phù hợp dựa trên thuật toán/khoảng cách.
6. **Dashboard Service**: Tổng hợp dữ liệu, thống kê biểu đồ.
7. **Admin Service**: Quản lý danh mục (loại tội phạm, đơn vị, địa bàn).

## Layered Architecture (Trong mỗi Service)
- **Controller Layer**: Tiếp nhận HTTP requests, validate (nếu dùng `@Valid`), và trả về DTO.
- **Application/Service Layer**: Chứa toàn bộ business logic.
- **Domain Layer**: Chứa Entity (JPA) và Repository (Spring Data JPA).
- **Infrastructure Layer**: Chứa cấu hình bảo mật, client gọi sang service khác.

## Flow Demo
1. **Citizen submits report**: Người dân nộp đơn qua Web.
2. **API Gateway -> Report Service**: API Gateway route request tạo đơn báo cáo đến Report Service.
3. **Evidence Upload**: Các file bằng chứng được upload riêng lẻ thông qua Evidence Service.
4. **Scoring**: Report Service gọi thuật toán đánh giá mức độ khẩn cấp (UrgencyScoringService).
5. **Dispatch**: Dispatch Service được gọi hoặc tự động tính toán để gợi ý tổ công tác xử lý.
6. **Duty Officer**: Cán bộ trực ban nhận thông báo, xem hồ sơ, chuyển trạng thái sang `VERIFYING`.
