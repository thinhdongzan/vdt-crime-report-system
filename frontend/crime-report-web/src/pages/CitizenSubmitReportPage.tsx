import { SubmitReportForm } from '../components/citizen/SubmitReportForm';

export default function CitizenSubmitReportPage() {
  return (
    <div className="max-w-container-max mx-auto px-margin-desktop py-12">
      <div className="flex flex-col lg:flex-row gap-gutter">
        
        {/* LEFT COLUMN: Main Form (70%) */}
        <div className="lg:w-[70%] space-y-8">
          <div className="bg-surface border border-border-subtle rounded p-10 shadow-sm">
            {/* Header */}
            <div className="mb-8">
              <h1 className="font-headline-lg text-headline-lg text-[#1F2933] mb-2">Gửi tin báo tố giác</h1>
              <p className="font-body-md text-body-md text-text-muted">Vui lòng cung cấp thông tin vụ việc chính xác nhất có thể. Mọi thông tin sai sự thật sẽ bị xử lý theo quy định của pháp luật.</p>
            </div>

            {/* Alert Box */}
            <div className="bg-red-tint border-l-4 border-primary p-4 mb-10 flex items-start gap-3">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              <p className="font-body-sm text-body-sm text-primary font-medium leading-relaxed">
                Tin báo khẩn cấp đang diễn ra, có vũ khí hoặc có người bị thương sẽ được hệ thống ưu tiên đánh giá mức độ nguy cấp.
              </p>
            </div>

            <SubmitReportForm />
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar Instructions (30%) */}
        <div className="lg:w-[30%] space-y-6">
          <div className="bg-surface border border-border-subtle rounded p-6 sticky top-32 shadow-sm">
            <h3 className="font-title-lg text-title-lg text-on-surface mb-4 border-b border-border-subtle pb-4">Hướng dẫn cung cấp thông tin</h3>
            
            <div className="space-y-6">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary mt-1">info</span>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface mb-1">Mô tả rõ ràng</h4>
                  <p className="font-body-sm text-body-sm text-text-muted">Nêu rõ thời gian, địa điểm, đặc điểm nhận dạng của đối tượng (độ tuổi, trang phục, phương tiện...).</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary mt-1">image</span>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface mb-1">Cung cấp bằng chứng</h4>
                  <p className="font-body-sm text-body-sm text-text-muted">Hình ảnh, video từ camera an ninh, hoặc đoạn ghi âm sẽ giúp cơ quan chức năng xác minh nhanh chóng hơn.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary mt-1">gavel</span>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface mb-1">Trách nhiệm pháp lý</h4>
                  <p className="font-body-sm text-body-sm text-text-muted">Hành vi cung cấp thông tin giả mạo, vu khống người khác sẽ bị truy cứu trách nhiệm theo pháp luật.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-surface-container-low p-4 rounded-sm border border-border-subtle">
              <h4 className="font-title-md text-title-md text-on-surface mb-2">Cần hỗ trợ khẩn cấp?</h4>
              <p className="font-body-sm text-body-sm text-text-muted mb-3">Gọi ngay đường dây nóng của Cảnh sát phản ứng nhanh.</p>
              <div className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-sm font-display-lg text-2xl tracking-tight">
                <span className="material-symbols-outlined text-2xl">call</span>
                113
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
