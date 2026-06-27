import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="py-16 md:py-32 px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <h1 className="text-display-lg font-display-lg text-primary tracking-tight leading-tight">
          Hệ thống Tiếp nhận và Điều phối Thông tin tố giác tội phạm
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
          Nền tảng hỗ trợ người dân gửi tin báo an toàn, bảo mật danh tính và giúp cơ quan chức năng tiếp nhận, phân loại, điều phối xử lý kịp thời.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link to="/reports/submit" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-title-lg text-title-lg hover:bg-[#5C0000] transition-colors shadow-sm text-center">
            Gửi tin báo
          </Link>
          <Link to="/reports/track" className="bg-surface border-2 border-primary text-primary px-8 py-4 rounded-lg font-title-lg text-title-lg hover:bg-red-tint transition-colors text-center">
            Theo dõi trạng thái
          </Link>
        </div>
        <div className="pt-2">
          <Link to="/login" className="text-primary font-title-md text-title-md underline underline-offset-4 hover:opacity-80 transition-opacity">
            Đăng nhập hệ thống quản lý
          </Link>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-container rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
        <img alt="Tờ phiếu tin báo với con dấu trống đồng truyền thống Việt Nam và thông tin bảo mật" className="relative rounded-2xl border border-border-subtle shadow-xl w-full object-cover aspect-[4/3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRCGVH0v3L9pNYKggA9scD5CGy3XvTGzylwGlFaZucI6KGwyizzR9B2enLEd_PfjBT9qA2XDxpI5cHcfYfwOzK2TtPsIsjZ-C4qK82U-DwEmGU62YQNwAAN8InTBYgyZOAIpfh0m1WHI1Yy9cCTxNLPJnWSg7f8VIGSRcwU-dOZIuBFa6Bz-XEd6Ym4F5fbLTk3UafD5lvlskQDw_roFkcASf83fo1obAbEGPuk2XMeNwSb3dBPajFpWCDIa78ttaiEFmY-tcoEqV7"/>
      </div>
    </section>
  );
}
