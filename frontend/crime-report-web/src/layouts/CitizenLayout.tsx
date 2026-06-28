import { Outlet, Link, useLocation } from 'react-router-dom';

export default function CitizenLayout() {
  const location = useLocation();

  const getSubNavClass = (path: string) => {
    const isActive = location.pathname === path;
    return isActive
      ? "text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md transition-all"
      : "text-on-surface-variant font-medium hover:text-primary transition-all font-label-md text-label-md";
  };

  return (
    <div className="bg-page-bg font-body-md text-on-surface min-h-screen flex flex-col dong-son-watermark">
      {/* TopNavBar */}
      <header className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container font-title-md text-title-md w-full top-0 sticky border-b border-on-primary/10 transition-colors duration-200 z-50">
        <div className="flex justify-between items-center px-margin-desktop w-full max-w-container-max mx-auto h-16">
          <div className="font-headline-md text-headline-md font-semibold text-on-primary dark:text-on-primary-container">
            <Link to="/citizen/dashboard">Hệ thống Tiếp nhận & Điều phối</Link>
          </div>
          <nav className="hidden md:flex items-center gap-gutter h-full">
            <Link className="text-on-primary/80 font-medium hover:text-on-primary hover:bg-on-primary/5 transition-colors duration-200 px-2 py-1" to="/">Trang chủ</Link>
            <Link className="text-on-primary/80 font-medium hover:text-on-primary hover:bg-on-primary/5 transition-colors duration-200 px-2 py-1" to="/citizen/reports/submit">Gửi tin báo</Link>
            <Link className="text-on-primary/80 font-medium hover:text-on-primary hover:bg-on-primary/5 transition-colors duration-200 px-2 py-1" to="/citizen/reports/track">Theo dõi tin báo</Link>
            <Link className="text-on-primary/80 font-medium hover:text-on-primary hover:bg-on-primary/5 transition-colors duration-200 px-2 py-1" to="#">Hướng dẫn</Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined cursor-pointer">notifications</span>
              <span className="material-symbols-outlined cursor-pointer">account_circle</span>
            </div>
            <Link to="/login" className="bg-on-primary text-primary px-4 py-1.5 rounded-lg font-medium text-body-sm hover:bg-on-primary/90 transition-colors">
              Đăng xuất
            </Link>
          </div>
        </div>
      </header>

      {/* SideNavBar (Secondary Horizontal Navigation) */}
      <nav className="flex items-center justify-start gap-gutter px-margin-desktop w-full bg-surface border-b border-border-subtle h-12 sticky top-16 z-40 overflow-x-auto">
        <Link className={getSubNavClass("/citizen/dashboard")} to="/citizen/dashboard">Tổng quan</Link>
        <Link className={getSubNavClass("/citizen/reports/submit")} to="/citizen/reports/submit">Gửi tin báo</Link>
        <Link className={getSubNavClass("/citizen/reports/track")} to="/citizen/reports/track">Theo dõi tin báo</Link>
        <Link className={getSubNavClass("/citizen/profile")} to="#">Hồ sơ của tôi</Link>
        <Link className={getSubNavClass("/citizen/support")} to="#">Hỗ trợ</Link>
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-page-bg dark:bg-on-background text-on-surface-variant dark:text-surface-variant border-t border-border-subtle relative z-10 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full py-8 px-margin-desktop max-w-container-max mx-auto gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-title-md text-title-md text-primary font-bold">Bộ Công an Việt Nam</span>
            <p className="font-body-sm text-body-sm text-center md:text-left">© 2026 Bộ Công an - Cổng Thông tin Tố giác Tội phạm. Tất cả quyền được bảo lưu.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-body-sm text-body-sm">
            <Link className="text-text-muted hover:text-primary underline transition-all duration-200" to="#">Điều khoản sử dụng</Link>
            <Link className="text-text-muted hover:text-primary underline transition-all duration-200" to="#">Chính sách bảo mật</Link>
            <Link className="text-text-muted hover:text-primary underline transition-all duration-200" to="#">Hướng dẫn sử dụng</Link>
            <Link className="text-text-muted hover:text-primary underline transition-all duration-200" to="#">Liên hệ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
