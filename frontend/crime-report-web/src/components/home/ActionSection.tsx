export function ActionSection() {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-surface p-8 border border-border-subtle rounded-xl hover-lift">
          <div className="w-12 h-12 bg-red-tint text-primary rounded-lg flex items-center justify-center mb-6">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
          </div>
          <h3 className="text-headline-md font-headline-md text-primary mb-3">Gửi tin báo</h3>
          <p className="text-body-md font-body-md text-on-surface-variant">Cung cấp thông tin vụ việc, vị trí xảy ra và bằng chứng liên quan một cách ẩn danh và an toàn.</p>
        </div>
        <div className="bg-surface p-8 border border-border-subtle rounded-xl hover-lift">
          <div className="w-12 h-12 bg-red-tint text-primary rounded-lg flex items-center justify-center mb-6">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
          </div>
          <h3 className="text-headline-md font-headline-md text-primary mb-3">Theo dõi trạng thái</h3>
          <p className="text-body-md font-body-md text-on-surface-variant">Tra cứu tiến độ xử lý và phản hồi từ cơ quan chức năng bằng mã tin báo đã được cung cấp.</p>
        </div>
        <div className="bg-surface p-8 border border-border-subtle rounded-xl hover-lift">
          <div className="w-12 h-12 bg-red-tint text-primary rounded-lg flex items-center justify-center mb-6">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
          </div>
          <h3 className="text-headline-md font-headline-md text-primary mb-3">Đăng nhập hệ thống</h3>
          <p className="text-body-md font-body-md text-on-surface-variant">Khu vực dành riêng cho cán bộ trực ban, điều tra viên, chỉ huy và quản trị viên hệ thống.</p>
        </div>
      </div>
    </section>
  );
}
