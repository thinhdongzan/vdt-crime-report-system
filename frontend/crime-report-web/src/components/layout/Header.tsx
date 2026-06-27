import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container docked full-width top-0 z-50 sticky border-none">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-16">
        <Link to="/" className="flex items-center gap-4">
          <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1", fontSize: "32px" }}>shield</span>
          <span className="text-title-lg font-headline-md text-on-primary dark:text-on-primary-container hidden lg:block">Cổng Thông Tin Tố Giác Tội Phạm</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-on-primary font-bold border-b-2 border-on-primary pb-1 font-label-md text-label-md">Trang chủ</Link>
          <Link to="/reports/submit" className="text-on-primary/80 font-body-md text-label-md hover:text-on-primary hover:opacity-100 transition-opacity">Gửi tin báo</Link>
          <Link to="/reports/track" className="text-on-primary/80 font-body-md text-label-md hover:text-on-primary hover:opacity-100 transition-opacity">Theo dõi tin báo</Link>
          <Link to="/login" className="bg-surface text-primary px-6 py-2 rounded-lg font-title-md text-title-md active:scale-95 transition-transform duration-150 inline-block">Đăng nhập</Link>
        </div>
        <button className="md:hidden material-symbols-outlined">menu</button>
      </nav>
    </header>
  );
}
