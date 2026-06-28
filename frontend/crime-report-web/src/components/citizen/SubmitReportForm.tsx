import { useState } from 'react';

export function SubmitReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      window.location.href = '/citizen/reports/track'; // Or navigate to success page
    }, 1500);
  };

  return (
    <form className="space-y-12" onSubmit={handleSubmit}>
      {/* SECTION 1: Thông tin vụ việc */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</span>
          <h2 className="font-title-lg text-title-lg text-primary">Thông tin vụ việc</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-md text-label-md text-on-surface uppercase">Loại hành vi vi phạm/tội phạm *</label>
            <select required className="border border-border-subtle rounded-sm h-12 px-4 focus:ring-1 focus:ring-primary focus:border-primary bg-surface outline-none cursor-pointer">
              <option value="">Chọn loại hình tội phạm</option>
              <option value="1">Trộm cắp/Cướp giật</option>
              <option value="2">Hành hung/Gây rối trật tự</option>
              <option value="3">Lừa đảo chiếm đoạt tài sản</option>
              <option value="4">Tội phạm ma túy</option>
              <option value="5">Tội phạm công nghệ cao</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-md text-label-md text-on-surface uppercase">Tiêu đề tin báo *</label>
            <input required className="border border-border-subtle rounded-sm h-12 px-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="Tóm tắt ngắn gọn vụ việc (VD: Vụ trộm xe máy tại ngõ 24 Trần Phú)" type="text"/>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-md text-label-md text-on-surface uppercase">Nội dung vụ việc *</label>
            <textarea required className="border border-border-subtle rounded-sm p-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none resize-none" placeholder="Mô tả chi tiết diễn biến, nhận dạng đối tượng, phương tiện..." rows={6}></textarea>
          </div>

          {/* Urgency Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <label className="flex items-center gap-3 p-4 border border-border-subtle rounded-sm bg-surface-container-lowest cursor-pointer hover:bg-red-tint transition-colors">
              <input className="w-5 h-5 text-primary border-border-subtle rounded focus:ring-primary" type="checkbox"/>
              <span className="font-body-sm text-body-sm">Vụ việc đang diễn ra</span>
            </label>
            <label className="flex items-center gap-3 p-4 border border-border-subtle rounded-sm bg-surface-container-lowest cursor-pointer hover:bg-red-tint transition-colors">
              <input className="w-5 h-5 text-primary border-border-subtle rounded focus:ring-primary" type="checkbox"/>
              <span className="font-body-sm text-body-sm">Có vũ khí</span>
            </label>
            <label className="flex items-center gap-3 p-4 border border-border-subtle rounded-sm bg-surface-container-lowest cursor-pointer hover:bg-red-tint transition-colors">
              <input className="w-5 h-5 text-primary border-border-subtle rounded focus:ring-primary" type="checkbox"/>
              <span className="font-body-sm text-body-sm">Có người bị thương</span>
            </label>
          </div>
        </div>
      </section>

      {/* SECTION 2: Vị trí xảy ra vụ việc */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</span>
          <h2 className="font-title-lg text-title-lg text-primary">Vị trí xảy ra vụ việc</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-md text-label-md text-on-surface uppercase">Địa chỉ xảy ra vụ việc *</label>
            <div className="flex gap-2">
              <input required className="flex-grow border border-border-subtle rounded-sm h-12 px-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="Số nhà, tên đường, phường/xã, quận/huyện..." type="text"/>
              <button className="flex items-center gap-2 border border-primary text-primary px-4 rounded-sm hover:bg-red-tint transition-colors whitespace-nowrap font-medium" type="button">
                <span className="material-symbols-outlined text-xl">my_location</span>
                <span className="hidden sm:inline">Sử dụng vị trí hiện tại</span>
              </button>
            </div>
          </div>

          <div className="bg-[#F0F0F0] w-full h-64 rounded-sm border border-border-subtle flex flex-col items-center justify-center text-text-muted relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#610000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <span className="material-symbols-outlined text-4xl mb-2 opacity-40">map</span>
            <p className="font-body-sm text-body-sm px-10 text-center">Khu vực bản đồ sẽ được hiển thị sau khi hệ thống xác định vị trí.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Bằng chứng đính kèm */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</span>
          <h2 className="font-title-lg text-title-lg text-primary">Bằng chứng đính kèm</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="border-2 border-dashed border-border-subtle rounded-sm p-8 flex flex-col items-center justify-center bg-surface-container-lowest hover:border-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-4xl text-text-muted mb-4">cloud_upload</span>
            <p className="font-title-md text-title-md text-on-surface mb-1">Kéo thả tệp vào đây hoặc chọn từ thiết bị</p>
            <p className="font-body-sm text-body-sm text-text-muted">Hỗ trợ: Hình ảnh (JPG, PNG), Video (MP4), Ghi âm (MP3). Tối đa 50MB/tệp.</p>
          </div>

          {/* File Item */}
          <div className="flex items-center justify-between p-4 border border-border-subtle rounded-sm bg-surface">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">image</span>
              <div className="flex flex-col">
                <span className="font-medium text-body-md">hinh_anh_hien_truong.jpg</span>
                <span className="text-xs text-text-muted">2MB • Đã tải lên</span>
              </div>
            </div>
            <button className="material-symbols-outlined text-error hover:bg-red-tint p-2 rounded-full transition-colors" type="button">delete</button>
          </div>
        </div>
      </section>

      {/* SECTION 4: Cam kết */}
      <section className="bg-surface-container-low p-6 rounded-sm border border-border-subtle mt-8">
        <label className="flex items-start gap-3 cursor-pointer">
          <input required className="w-5 h-5 mt-0.5 text-primary border-border-subtle rounded focus:ring-primary" type="checkbox"/>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Tôi xin cam đoan những thông tin cung cấp ở trên là hoàn toàn đúng sự thật và chịu trách nhiệm trước pháp luật về nội dung tin báo. Tôi đồng ý với các 
            <a href="#" className="text-primary hover:underline ml-1">Điều khoản & Chính sách bảo mật</a> của Cổng Thông Tin Tố Giác Tội Phạm.
          </span>
        </label>
      </section>

      {/* Submit Button */}
      <div className="flex justify-end pt-4 border-t border-border-subtle">
        <button 
          disabled={isSubmitting}
          className="bg-primary hover:bg-[#5C0000] text-white px-8 py-4 rounded-sm font-title-lg transition-all active:scale-95 disabled:opacity-70 flex items-center gap-2" 
          type="submit"
        >
          {isSubmitting ? (
            <span className="material-symbols-outlined animate-spin">refresh</span>
          ) : (
            <span className="material-symbols-outlined">send</span>
          )}
          Gửi Tin Báo Tố Giác
        </button>
      </div>
    </form>
  );
}
