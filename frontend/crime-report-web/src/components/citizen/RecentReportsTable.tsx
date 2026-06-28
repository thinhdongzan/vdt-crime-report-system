import { Link } from 'react-router-dom';
import { recentReports } from '../../data/mockData';

export function RecentReportsTable() {
  return (
    <div className="bg-surface border border-border-subtle rounded overflow-hidden">
      <div className="px-6 py-4 border-b border-border-subtle bg-surface-container-low flex justify-between items-center">
        <h3 className="font-title-md text-title-md">Tin báo gần đây</h3>
        <Link className="text-primary font-label-md hover:underline" to="/citizen/reports/track">Xem tất cả</Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-surface-container-low/50">
              <th className="px-6 py-3 font-title-md text-body-sm text-on-surface-variant border-b border-border-subtle">Mã tin báo</th>
              <th className="px-6 py-3 font-title-md text-body-sm text-on-surface-variant border-b border-border-subtle">Tiêu đề</th>
              <th className="px-6 py-3 font-title-md text-body-sm text-on-surface-variant border-b border-border-subtle">Loại</th>
              <th className="px-6 py-3 font-title-md text-body-sm text-on-surface-variant border-b border-border-subtle">Thời gian</th>
              <th className="px-6 py-3 font-title-md text-body-sm text-on-surface-variant border-b border-border-subtle">Trạng thái</th>
              <th className="px-6 py-3 font-title-md text-body-sm text-on-surface-variant border-b border-border-subtle text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="font-body-sm">
            {recentReports.map((report) => (
              <tr key={report.id} className="hover:bg-page-bg/50 transition-colors">
                <td className="px-6 py-4 border-b border-border-subtle font-medium">{report.id}</td>
                <td className="px-6 py-4 border-b border-border-subtle">{report.title}</td>
                <td className="px-6 py-4 border-b border-border-subtle">{report.category}</td>
                <td className="px-6 py-4 border-b border-border-subtle">{report.date}</td>
                <td className="px-6 py-4 border-b border-border-subtle">
                  <span className={`${report.statusColor} px-2 py-0.5 rounded text-[12px] font-semibold`}>
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-border-subtle text-right">
                  <Link to="/citizen/reports/track" className="text-primary hover:underline font-medium">Chi tiết</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
