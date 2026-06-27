import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(true);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login delay
    setTimeout(() => {
      setIsLoading(false);
      setShowError(true);
    }, 1500);
  };

  return (
    <main className="w-full min-h-screen flex flex-col md:flex-row bg-page-bg">
      {/* Left Column: Branding & Messaging */}
      <section className="relative w-full md:w-5/12 lg:w-1/2 bg-primary flex items-center justify-center p-8 md:p-16 overflow-hidden">
        {/* Dong Son Watermark Overlay */}
        <div 
          className="absolute inset-0 z-0 dong-son-watermark" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD74zBdtguIgHMHf8WeTbGnFla_EfWV1MRMGFw-Egd1RtztI12LItKob_B8aInPayDSig-X6nGf5kBaqwxCsxI7GaB28J4wkLz3V5AmdLKcUDrMX3I6-RpB1gYAdhqbm0HFN5DobkwqzL7JSh1TIpox0XdkjyMZrwdt_8TOGUWVpyyqdZyNVzQo-u5KEydvgWR_bacP-pHQdFu_gTJxQsUrKMDz_hHqyoyjxGuzCLchUtGyYUMqalleiSRfFd3Js9OMyriy_8V8BxNW')" }}
        ></div>
        
        <div className="relative z-10 max-w-lg text-center md:text-left flex flex-col gap-6">
          <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-[48px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
            </div>
          </div>
          
          <h1 className="font-headline-lg text-headline-lg text-on-primary tracking-tight leading-tight">
            Hệ thống Tiếp nhận và Điều phối Thông tin tố giác tội phạm
          </h1>
          
          <div className="h-1 w-24 bg-secondary-fixed hidden md:block"></div>
          
          <p className="font-body-lg text-body-lg text-on-primary/90">
            Bảo mật - Chính xác - Kịp thời
          </p>
          
          <p className="font-body-md text-body-md text-on-primary/80 leading-relaxed">
            Hệ thống hỗ trợ tiếp nhận, phân loại và điều phối xử lý thông tin tố giác tội phạm trực thuộc Bộ Công An, đảm bảo tính minh bạch và an toàn tuyệt đối cho người cung cấp tin.
          </p>
        </div>
      </section>

      {/* Right Column: Login Form */}
      <section className="w-full md:w-7/12 lg:w-1/2 bg-page-bg flex items-center justify-center p-6 md:p-12 lg:p-24">
        <div className="w-full max-w-md bg-surface border border-border-subtle p-8 lg:p-10 rounded-lg shadow-sm">
          
          {/* Form Header */}
          <div className="mb-8">
            <h2 className="font-headline-md text-headline-md text-on-background mb-2">
              Đăng nhập hệ thống
            </h2>
            <p className="font-body-sm text-body-sm text-text-muted">
              Dành cho người dân, cán bộ trực ban, điều tra viên, chỉ huy trung tâm và quản trị viên được cấp quyền.
            </p>
          </div>

          {/* Error State Alert */}
          {showError && (
            <div className="mb-6 p-4 bg-red-tint border-l-4 border-error flex gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
              <p className="font-body-sm text-body-sm text-on-error-container">
                Thông tin đăng nhập không chính xác. Vui lòng kiểm tra lại email/số điện thoại và mật khẩu.
              </p>
            </div>
          )}

          {/* Login Form */}
          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            
            {/* Identifier Input */}
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="identifier">
                Email hoặc số điện thoại
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-muted text-[20px]">person</span>
                <input 
                  className="w-full pl-10 pr-4 py-3 bg-white border border-border-subtle rounded text-body-md focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" 
                  id="identifier" 
                  placeholder="Nhập email hoặc SĐT..." 
                  type="text"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="password">
                  Mật khẩu
                </label>
                <Link to="#" className="font-body-sm text-body-sm text-primary hover:underline">Quên mật khẩu?</Link>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-muted text-[20px]">lock</span>
                <input 
                  className="w-full pl-10 pr-12 py-3 bg-white border border-border-subtle rounded text-body-md focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" 
                  id="password" 
                  placeholder="••••••••" 
                  type="password"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-on-background" type="button">
                  <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input className="w-4 h-4 rounded border-border-subtle text-primary focus:ring-primary" id="remember" type="checkbox" />
              <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="remember">Duy trì đăng nhập trên thiết bị này</label>
            </div>

            {/* Primary Action */}
            <button 
              className="mt-4 w-full bg-primary hover:bg-[#5C0000] text-on-primary font-title-md text-title-md py-4 rounded shadow-sm flex items-center justify-center gap-3 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden" 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Đăng nhập"
              )}
            </button>
            
            <div className="text-center mt-2">
               <Link to="/" className="font-body-sm text-body-sm text-primary hover:underline">Quay lại trang chủ</Link>
            </div>
            
          </form>
        </div>
      </section>
    </main>
  );
}
