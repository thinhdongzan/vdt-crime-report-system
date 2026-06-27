export function ProcessSection() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop">
      <div className="text-center mb-16">
        <h2 className="text-headline-lg font-headline-lg text-primary mb-4">Quy trình xử lý tin báo</h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Line background for desktop */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border-subtle -z-10"></div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-primary text-on-primary flex items-center justify-center text-title-lg font-headline-md shadow-lg">1</div>
          <h4 className="text-title-md font-headline-md">Người dân gửi tin báo</h4>
          <p className="text-body-sm text-on-surface-variant">Hệ thống tiếp nhận thông tin 24/7 một cách bảo mật.</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-primary text-on-primary flex items-center justify-center text-title-lg font-headline-md shadow-lg">2</div>
          <h4 className="text-title-md font-headline-md">Mã hóa và tính điểm</h4>
          <p className="text-body-sm text-on-surface-variant">Tự động phân loại mức độ nguy cấp và mã hóa thông tin.</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-primary text-on-primary flex items-center justify-center text-title-lg font-headline-md shadow-lg">3</div>
          <h4 className="text-title-md font-headline-md">Điều phối địa bàn</h4>
          <p className="text-body-sm text-on-surface-variant">Chuyển tin báo tới đúng đơn vị có thẩm quyền giải quyết.</p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-primary text-on-primary flex items-center justify-center text-title-lg font-headline-md shadow-lg">4</div>
          <h4 className="text-title-md font-headline-md">Cập nhật trạng thái</h4>
          <p className="text-body-sm text-on-surface-variant">Cán bộ xử lý và phản hồi tiến độ tới người gửi tin.</p>
        </div>
      </div>
    </section>
  );
}
