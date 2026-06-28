import { Link } from 'react-router-dom';
import { RecentReportsTable } from '../components/citizen/RecentReportsTable';
import { citizenStats } from '../data/mockData';

export default function CitizenDashboardPage() {
  return (
    <div className="max-w-container-max mx-auto w-full px-margin-desktop py-12">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Xin chào, Nguyễn Văn A</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Bạn có thể gửi tin báo mới, theo dõi trạng thái xử lý hoặc xem lại các tin báo đã gửi. Mọi thông tin cung cấp đều được bảo mật tuyệt đối.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <div className="lg:col-span-2 space-y-gutter">
          
          {/* Action Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Card 1: Gửi tin báo */}
            <div className="bg-surface border border-border-subtle p-8 rounded flex flex-col justify-between min-h-[240px]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">report_problem</span>
                  <h3 className="font-title-lg text-title-lg">Gửi tin báo tố giác</h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Cung cấp thông tin vụ việc, đối tượng nghi vấn hoặc các hành vi vi phạm pháp luật mà bạn chứng kiến hoặc biết được.
                </p>
              </div>
              <Link to="/citizen/reports/submit" className="bg-primary hover:bg-[#5C0000] text-on-primary px-6 py-3 rounded text-center transition-colors font-title-md block">
                Gửi tin báo mới
              </Link>
            </div>

            {/* Card 2: Theo dõi */}
            <div className="bg-surface border border-border-subtle p-8 rounded flex flex-col justify-between min-h-[240px]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">analytics</span>
                  <h3 className="font-title-lg text-title-lg">Theo dõi trạng thái tin báo</h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Tra cứu tiến độ xử lý và phản hồi từ cơ quan chức năng dựa trên mã tin báo bạn đã được cấp trước đó.
                </p>
              </div>
              <Link to="/citizen/reports/track" className="bg-surface border border-primary text-primary hover:bg-red-tint px-6 py-3 rounded text-center transition-colors font-title-md block">
                Theo dõi tin báo
              </Link>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-surface border border-border-subtle p-4 rounded text-center">
              <div className="font-label-md text-label-md text-on-surface-variant uppercase mb-1">Tin đã gửi</div>
              <div className="font-display-lg text-headline-lg text-primary">{citizenStats.submitted}</div>
            </div>
            <div className="bg-surface border border-border-subtle p-4 rounded text-center">
              <div className="font-label-md text-label-md text-on-surface-variant uppercase mb-1">Đang xử lý</div>
              <div className="font-display-lg text-headline-lg text-primary">{citizenStats.processing}</div>
            </div>
            <div className="bg-surface border border-border-subtle p-4 rounded text-center">
              <div className="font-label-md text-label-md text-on-surface-variant uppercase mb-1">Đã xử lý</div>
              <div className="font-display-lg text-headline-lg text-primary">{citizenStats.processed}</div>
            </div>
            <div className="bg-surface border border-border-subtle p-4 rounded text-center">
              <div className="font-label-md text-label-md text-on-surface-variant uppercase mb-1">Cần bổ sung</div>
              <div className="font-display-lg text-headline-lg text-on-surface-variant">{citizenStats.needsInfo}</div>
            </div>
          </div>

          {/* Recent Reports Table */}
          <RecentReportsTable />

        </div>

        {/* Right Sidebar */}
        <div className="space-y-gutter">
          <div className="bg-primary text-on-primary rounded p-6 shadow-sm">
            <h3 className="font-title-lg text-title-lg mb-2">Đường dây nóng</h3>
            <p className="font-body-sm text-body-sm opacity-90 mb-4">Trong trường hợp khẩn cấp, vui lòng gọi trực tiếp:</p>
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-2xl">call</span>
              <span className="font-display-lg text-headline-lg tracking-tight">113</span>
            </div>
            <p className="font-body-sm text-body-sm opacity-90 mt-4 pt-4 border-t border-on-primary/20">Cảnh sát Phản ứng nhanh, trực 24/7 toàn quốc.</p>
          </div>
          
          <div className="bg-surface border border-border-subtle rounded p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">verified_user</span>
              <div>
                <h4 className="font-title-md text-title-md text-on-surface mb-1">Bảo mật thông tin</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Thông tin người báo tin được mã hóa và bảo vệ tuyệt đối theo Luật Bảo vệ bí mật nhà nước.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
