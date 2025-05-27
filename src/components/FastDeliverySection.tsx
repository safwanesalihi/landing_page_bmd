
const FastDeliverySection = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="section-container">
        <div className="text-center mb-16 reveal-animation">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <i className="fas fa-shipping-fast text-4xl text-blue-600"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            توصيل سريع : أقل من 12 ساعة ف المدن الكبيرة!
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 reveal-animation">
            <div className="service-card">
              <div className="flex items-center space-x-6 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock text-2xl text-blue-600"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">أقل من 12 ساعة</h3>
                  <p className="text-blue-600 text-lg">كازا، الرباط، مراكش، فاس...</p>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="flex items-center space-x-6 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock text-2xl text-blue-700"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">أقل من 24 ساعة</h3>
                  <p className="text-blue-600 text-lg">جميع المناطق الأخرى</p>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="flex items-center space-x-6 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marked-alt text-2xl text-blue-800"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">تغطية شاملة</h3>
                  <p className="text-blue-600 text-lg">كنتواجدو فـ كازا و عندنا فروع ف جميع المدن المغربية</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Visualization */}
          <div className="relative reveal-animation">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">خريطة التغطية</h3>
              
              {/* Morocco Map Placeholder */}
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-80">
                {/* Major Cities */}
                <div className="absolute top-1/4 right-1/3 animate-pulse">
                  <div className="w-4 h-4 bg-blue-600 rounded-full shadow-lg"></div>
                  <span className="absolute -bottom-6 -right-4 text-sm font-medium text-blue-800">الرباط</span>
                </div>
                
                <div className="absolute top-1/3 right-1/4 animate-pulse delay-300">
                  <div className="w-4 h-4 bg-blue-600 rounded-full shadow-lg"></div>
                  <span className="absolute -bottom-6 -right-4 text-sm font-medium text-blue-800">كازا</span>
                </div>
                
                <div className="absolute bottom-1/3 right-1/2 animate-pulse delay-500">
                  <div className="w-4 h-4 bg-blue-600 rounded-full shadow-lg"></div>
                  <span className="absolute -bottom-6 -right-6 text-sm font-medium text-blue-800">مراكش</span>
                </div>
                
                <div className="absolute top-1/2 left-1/3 animate-pulse delay-700">
                  <div className="w-4 h-4 bg-blue-600 rounded-full shadow-lg"></div>
                  <span className="absolute -bottom-6 -right-2 text-sm font-medium text-blue-800">فاس</span>
                </div>

                {/* Coverage Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <path d="M25,25 Q50,10 75,35 Q60,50 40,70 Q30,40 25,25" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="2" 
                        fill="none" 
                        className="animate-pulse" />
                </svg>
              </div>

              {/* Timeline */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium text-blue-800">المدن الكبيرة</span>
                  <span className="text-2xl font-bold text-blue-600">12 ساعة</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-100 rounded-lg">
                  <span className="font-medium text-blue-800">باقي المناطق</span>
                  <span className="text-2xl font-bold text-blue-700">24 ساعة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FastDeliverySection };
