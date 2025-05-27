
const FreeStorageSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="reveal-animation">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8">
              <i className="fas fa-warehouse text-4xl text-primary"></i>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              خزن و حضّر طلبياتك مجانا
            </h2>

            <div className="space-y-6">
              <div className="service-card">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                    <i className="fas fa-warehouse text-2xl text-accent"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">التخزين فـ المخزن ديالنا</h3>
                    <p className="text-gray-600">مساحات تخزين آمنة ومضمونة</p>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <i className="fas fa-box-open text-2xl text-secondary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">التغليف و الباكاجينگ مشمولين</h3>
                    <p className="text-gray-600">تغليف احترافي لجميع المنتجات</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-l from-accent to-accent/80 p-8 rounded-2xl text-white">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="text-6xl font-black">FREE</div>
                  <div className="text-2xl font-bold">مجانا تماما!</div>
                </div>
                <p className="text-xl mb-4">كلشي فابور، وهادي ماكايناش فالسوق المغربي</p>
                <button className="bg-white text-accent font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300">
                  جرب الخدمة
                </button>
              </div>
            </div>
          </div>

          {/* Warehouse Visualization */}
          <div className="reveal-animation">
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">مخزننا المتطور</h3>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800&h=600" 
                  alt="BMD Warehouse"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                
                {/* Floating features */}
                <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg animate-float">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <i className="fas fa-shield-alt text-accent"></i>
                    <span className="text-sm font-medium">آمن</span>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg animate-float delay-300">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <i className="fas fa-thermometer-half text-secondary"></i>
                    <span className="text-sm font-medium">مكيف</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg animate-float delay-500">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <i className="fas fa-camera text-primary"></i>
                    <span className="text-sm font-medium">مراقب</span>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-primary mb-4 text-center">BMD مقابل المنافسين</h4>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="font-bold text-gray-600">الخدمة</div>
                  <div className="font-bold text-accent">BMD</div>
                  <div className="font-bold text-gray-400">الآخرين</div>
                  
                  <div className="text-gray-600">التخزين</div>
                  <div className="text-accent font-bold">مجاني</div>
                  <div className="text-gray-400">مدفوع</div>
                  
                  <div className="text-gray-600">التغليف</div>
                  <div className="text-accent font-bold">مجاني</div>
                  <div className="text-gray-400">مدفوع</div>
                  
                  <div className="text-gray-600">الأمان</div>
                  <div className="text-accent font-bold">مضمون</div>
                  <div className="text-gray-400">محدود</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FreeStorageSection };
