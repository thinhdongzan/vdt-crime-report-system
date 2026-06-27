export function TrustSection() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary text-on-primary relative overflow-hidden rounded-3xl mx-margin-mobile md:mx-margin-desktop mb-24">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-display-lg font-display-lg mb-8">Cam kết an toàn & bảo mật thông tin</h2>
          <p className="text-body-lg mb-12 opacity-90">Hệ thống được vận hành bởi Bộ Công An, áp dụng các tiêu chuẩn an ninh mạng cao nhất để bảo vệ quyền lợi của công dân.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-on-primary-container">verified_user</span>
              <span className="font-title-md">Bảo mật danh tính người tố giác</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-on-primary-container">qr_code</span>
              <span className="font-title-md">Theo dõi bằng mã tin báo</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-on-primary-container">admin_panel_settings</span>
              <span className="font-title-md">Phân quyền truy cập theo vai trò</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-on-primary-container">history</span>
              <span className="font-title-md">Ghi nhận lịch sử xử lý hồ sơ</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center">
          <span className="material-symbols-outlined" style={{ fontSize: "240px", opacity: 0.2 }}>security</span>
        </div>
      </div>
      {/* Decorative circle */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container rounded-full opacity-30"></div>
    </section>
  );
}
