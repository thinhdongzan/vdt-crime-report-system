import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (password !== confirmPassword) {
      setErrorMsg('Mật khẩu nhập lại không khớp.');
      return;
    }

    if (!email && !phone) {
      setErrorMsg('Vui lòng nhập Email hoặc Số điện thoại.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, phone, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Đăng ký không thành công. Vui lòng kiểm tra lại thông tin.');
      }

      // Success, redirect to login page with success param
      navigate('/login?registered=true');

    } catch (err: any) {
      setErrorMsg(err.message || 'Đã có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col md:flex-row bg-page-bg">
      <section className="relative w-full md:w-5/12 lg:w-1/2 bg-primary flex items-center justify-center p-6 md:p-12 overflow-hidden">
        {/* Back Button */}
        <Link to="/" className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors z-20">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          <span className="font-body-sm font-medium">Trang chủ</span>
        </Link>

        {/* Dong Son Watermark Overlay */}
        <div 
          className="absolute inset-0 z-0 dong-son-watermark" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD74zBdtguIgHMHf8WeTbGnFla_EfWV1MRMGFw-Egd1RtztI12LItKob_B8aInPayDSig-X6nGf5kBaqwxCsxI7GaB28J4wkLz3V5AmdLKcUDrMX3I6-RpB1gYAdhqbm0HFN5DobkwqzL7JSh1TIpox0XdkjyMZrwdt_8TOGUWVpyyqdZyNVzQo-u5KEydvgWR_bacP-pHQdFu_gTJxQsUrKMDz_hHqyoyjxGuzCLchUtGyYUMqalleiSRfFd3Js9OMyriy_8V8BxNW')" }}
        ></div>
        
        <div className="relative z-10 max-w-lg text-center md:text-left flex flex-col gap-4">
          <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-[48px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
            </div>
          </div>
          
          <h1 className="font-headline-lg text-headline-lg text-on-primary tracking-tight leading-tight">
            Cổng Thông Tin Tố Giác Tội Phạm
          </h1>
          
          <div className="h-1 w-24 bg-secondary-fixed hidden md:block"></div>
          
          <p className="font-body-lg text-body-lg text-on-primary/90">
            Tạo tài khoản để tham gia bảo vệ an ninh trật tự
          </p>
          
          <p className="font-body-md text-body-md text-on-primary/80 leading-relaxed">
            Việc đăng ký tài khoản giúp bạn dễ dàng theo dõi tiến độ xử lý tin báo, đồng thời giúp cơ quan chức năng xác minh thông tin nhanh chóng hơn.
          </p>
        </div>
      </section>

      {/* Right Column: Register Form */}
      <section className="w-full md:w-7/12 lg:w-1/2 bg-page-bg flex items-center justify-center p-4 md:p-8 relative">
        <div className="w-full max-w-lg bg-surface border border-border-subtle p-6 lg:p-8 rounded-lg shadow-sm z-10 mt-10 md:mt-0">
          
          {/* Form Header */}
          <div className="mb-5">
            <h2 className="font-headline-md text-headline-md text-on-background mb-2">
              Đăng ký tài khoản
            </h2>
            <p className="font-body-sm text-body-sm text-text-muted">
              Vui lòng nhập đầy đủ và chính xác thông tin cá nhân.
            </p>
          </div>

          {/* Error State Alert */}
          {errorMsg && (
            <div className="mb-6 p-4 bg-red-tint border-l-4 border-error flex gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
              <p className="font-body-sm text-body-sm text-on-error-container">
                {errorMsg}
              </p>
            </div>
          )}

          {/* Register Form */}
          <form className="flex flex-col gap-4" onSubmit={handleRegister}>
            
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="fullName">
                Họ và tên *
              </label>
              <input 
                className="w-full px-3 py-2.5 bg-white border border-border-subtle rounded text-body-md focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none disabled:bg-gray-100" 
                id="fullName" 
                placeholder="Nguyễn Văn A" 
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Email */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="email">
                  Email
                </label>
                <input 
                  className="w-full px-3 py-2.5 bg-white border border-border-subtle rounded text-body-md focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none disabled:bg-gray-100" 
                  id="email" 
                  placeholder="nguyenvana@example.com" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="phone">
                  Số điện thoại
                </label>
                <input 
                  className="w-full px-3 py-2.5 bg-white border border-border-subtle rounded text-body-md focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none disabled:bg-gray-100" 
                  id="phone" 
                  placeholder="0912345678" 
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Password */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="password">
                  Mật khẩu *
                </label>
                <input 
                  className="w-full px-3 py-2.5 bg-white border border-border-subtle rounded text-body-md focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none disabled:bg-gray-100" 
                  id="password" 
                  placeholder="••••••••" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  required
                  minLength={6}
                />
              </div>
              
              {/* Confirm Password */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="confirmPassword">
                  Nhập lại mật khẩu *
                </label>
                <input 
                  className="w-full px-3 py-2.5 bg-white border border-border-subtle rounded text-body-md focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none disabled:bg-gray-100" 
                  id="confirmPassword" 
                  placeholder="••••••••" 
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                  required
                  minLength={6}
                />
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-2 mt-2">
              <input className="w-4 h-4 mt-0.5 rounded border-border-subtle text-primary focus:ring-primary" id="terms" type="checkbox" required disabled={isLoading} />
              <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="terms">
                Tôi xác nhận các thông tin trên là chính xác và đồng ý với các <Link to="#" className="text-primary hover:underline">Điều khoản sử dụng</Link>.
              </label>
            </div>

            {/* Primary Action */}
            <button 
              className="mt-2 w-full bg-primary hover:bg-[#5C0000] text-on-primary font-title-md text-title-md py-3 rounded shadow-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden" 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Hoàn tất đăng ký"
              )}
            </button>
            
            <div className="text-center mt-2 flex flex-col gap-2">
               <span className="font-body-sm text-body-sm text-text-muted">Đã có tài khoản? <Link to="/login" className="text-primary hover:underline font-medium">Đăng nhập</Link></span>
            </div>
            
          </form>
        </div>
      </section>
    </main>
  );
}
