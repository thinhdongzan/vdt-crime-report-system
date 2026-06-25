# API Overview

Tất cả các API dưới đây (trừ nội bộ) đều đi qua API Gateway tại `http://localhost:8080`.

## 1. Auth Service (`/api/auth/**`)
- `POST /api/auth/register`: Đăng ký tài khoản.
- `POST /api/auth/login`: Đăng nhập lấy JWT.
- `GET /api/auth/me`: Lấy thông tin tài khoản hiện tại.
- `GET /api/auth/health` (Internal: `GET /actuator/health`): Health check.

## 2. Report Service (`/api/reports/**`)
- `POST /api/reports`: Tạo tin báo mới.
- `GET /api/reports`: Lấy danh sách tin báo.
- `GET /api/reports/{id}`: Chi tiết tin báo.
- `GET /api/reports/track/{trackingCode}`: Theo dõi trạng thái đơn.
- `PATCH /api/reports/{id}/receive`: Tiếp nhận đơn.
- `PATCH /api/reports/{id}/status`: Cập nhật trạng thái.
- `PATCH /api/reports/{id}/mark-spam`: Đánh dấu spam.
- `POST /api/reports/{id}/lock`: Khóa hồ sơ.
- `DELETE /api/reports/{id}/lock`: Mở khóa hồ sơ.
- `GET /api/reports/health` (Internal: `GET /actuator/health`): Health check.

## 3. Evidence Service (`/api/evidences/**`)
- `POST /api/evidences/upload`: Upload file.
- `GET /api/evidences/{id}`: Lấy thông tin file.
- `GET /api/evidences/report/{reportId}`: Lấy danh sách file của tin báo.
- `GET /api/evidences/health` (Internal: `GET /actuator/health`): Health check.

## 4. Dispatch Service (`/api/dispatch/**`)
- `GET /api/dispatch/suggestions?reportId=`: Gợi ý đơn vị xử lý.
- `POST /api/dispatch/assign`: Phân công.
- `GET /api/dispatch/health` (Internal: `GET /actuator/health`): Health check.

## 5. Dashboard Service (`/api/dashboard/**`)
- `GET /api/dashboard/summary`: Thống kê tổng quan.
- `GET /api/dashboard/by-status`: Thống kê theo trạng thái.
- `GET /api/dashboard/by-area`: Thống kê theo khu vực.
- `GET /api/dashboard/by-crime-type`: Thống kê theo loại tội phạm.
- `GET /api/dashboard/heatmap`: Bản đồ nhiệt.
- `GET /api/dashboard/timeline`: Dòng thời gian.
- `GET /api/dashboard/health` (Internal: `GET /actuator/health`): Health check.

## 6. Admin Service (`/api/admin/**`)
- `GET /api/admin/crime-types`: Lấy danh mục hình sự.
- `POST /api/admin/crime-types`: Thêm danh mục.
- `PUT /api/admin/crime-types/{id}`: Cập nhật danh mục.
- `GET /api/admin/areas`: Danh mục địa bàn.
- `POST /api/admin/areas`: Thêm địa bàn.
- `GET /api/admin/units`: Danh mục đơn vị.
- `POST /api/admin/units`: Thêm đơn vị.
- `GET /api/admin/health` (Internal: `GET /actuator/health`): Health check.
