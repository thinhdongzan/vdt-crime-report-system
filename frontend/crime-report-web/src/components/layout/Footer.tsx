import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-low w-full border-t border-border-subtle mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto gap-8">
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
            <span className="text-title-md font-headline-md text-primary dark:text-primary-fixed-dim uppercase tracking-wider">Bộ Công An Việt Nam</span>
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant max-w-md">
            Hệ thống Tiếp nhận và Điều phối Thông tin tố giác tội phạm. Thông tin trên hệ thống được xử lý theo phân quyền và quy trình nghiệp vụ quốc gia.
          </p>
          <p className="text-body-sm font-body-sm text-text-muted">© 2024 Cổng Thông Tin Tố Giác Tội Phạm - Bộ Công An. Tất cả quyền được bảo lưu.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="#" className="text-label-md font-label-md text-text-muted hover:text-primary transition-colors">Chính sách bảo mật</Link>
          <Link to="#" className="text-label-md font-label-md text-text-muted hover:text-primary transition-colors">Điều khoản sử dụng</Link>
          <Link to="#" className="text-label-md font-label-md text-text-muted hover:text-primary transition-colors">Liên hệ công tác</Link>
          <Link to="#" className="text-label-md font-label-md text-text-muted hover:text-primary transition-colors">Hướng dẫn kỹ thuật</Link>
        </div>
      </div>
    </footer>
  );
}
