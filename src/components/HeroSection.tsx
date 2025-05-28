
const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-l from-blue-800 via-blue-700 to-blue-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8 animate-fade-in">
            {/* Logo/Brand */}
            <div className="inline-block">
              <img 
                src="/lovable-uploads/d40f8913-3952-42ca-bbe9-3c708bc7ad99.png" 
                alt="BMD Logo"
                className="h-20 md:h-24 lg:h-28 mx-auto lg:mr-0 mb-4"
              />
              <div className="h-2 w-32 bg-blue-400 mx-auto lg:mr-0 rounded-full"></div>
            </div>
            
            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              شريكك في التوصيل
            </h2>
            
            {/* Subheadline */}
            <p className="text-2xl md:text-3xl text-blue-100 font-medium">
              خدمة مجربة، ونتائج ملموسة كتشهد لينا
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-blue-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              منذ أكثر من 5 سنين، BMD قلبات موازين التوصيل فالمغرب. السرعة، الدقة، والراحة هما شعارنا. 
              كنخدمو أكثر من 900 براند مغربية من كازا حتى لأقصى نقطة فالمملكة بخدمة احترافية كتخلي الزبناء ديالك فرحانين وراجعين.
            </p>
            
            {/* CTA Button */}
            <div className="pt-8">
              <button 
                onClick={scrollToContact}
                className="btn-primary text-2xl md:text-3xl px-12 py-6 shadow-2xl"
              >
                <i className="fas fa-rocket ml-4"></i>
                ابدأ الآن
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="animated-counter text-white">900+</div>
                <p className="text-blue-200 font-medium">براند مغربي</p>
              </div>
              <div className="text-center">
                <div className="animated-counter text-white">5+</div>
                <p className="text-blue-200 font-medium">سنوات خبرة</p>
              </div>
              <div className="text-center">
                <div className="animated-counter text-white">12</div>
                <p className="text-blue-200 font-medium">ساعة توصيل</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative animate-float">
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                {/* Floating background circle */}
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse-scale"></div>
                
                {/* Main image */}
                <img 
                  src="/lovable-uploads/92432ce1-6d9d-4ffb-b7b4-f14dca98a788.png" 
                  alt="BMD Delivery Team"
                  className="relative z-10 w-full h-full object-cover rounded-full border-8 border-white/30 shadow-2xl"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-xl animate-bounce">
                  <i className="fas fa-shipping-fast text-2xl"></i>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-4 rounded-full shadow-xl animate-bounce delay-500">
                  <i className="fas fa-truck text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
