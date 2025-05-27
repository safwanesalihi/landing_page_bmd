
const VipOfferSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* VIP Image */}
          <div className="reveal-animation">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-secondary rounded-3xl blur-lg opacity-30 animate-pulse"></div>
              
              <div className="relative bg-white rounded-3xl p-8 text-center">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-accent to-secondary text-white px-6 py-2 rounded-full font-bold text-lg">
                    <i className="fas fa-crown ml-2"></i>
                    VIP OFFER
                  </div>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=600" 
                  alt="Shocked VIP Customer"
                  className="w-full h-80 object-cover rounded-2xl mb-6 animate-float"
                />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 space-x-reverse text-accent">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  
                  <p className="text-gray-600 font-medium">
                    "ماكنتش كنتوقع هاد المستوى من الخدمة!"
                  </p>
                  
                  <div className="text-primary font-bold">
                    أحمد التاجر - براند مغربي مشهور
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VIP Content */}
          <div className="text-white space-y-8 reveal-animation">
            <div>
              <div className="inline-flex items-center space-x-2 space-x-reverse mb-6">
                <i className="fas fa-crown text-4xl text-accent"></i>
                <h2 className="text-4xl md:text-5xl font-bold">عرض حصري للبراندات القوية!</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <i className="fas fa-percentage text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold">كتوصل بأكثر من 80% من الطلبيات ديالك؟</h3>
                </div>
                <p className="text-blue-100 text-lg pr-16">
                  إذا كان معدل التوصيل ديالك عالي، عندك أولوية في خدماتنا
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marked-alt text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold">كتخدم فـ جميع المدن و القرى المغربية؟</h3>
                </div>
                <p className="text-blue-100 text-lg pr-16">
                  عندك تغطية واسعة؟ استفد من أسعار خاصة وخدمات متقدمة
                </p>
              </div>

              <div className="bg-gradient-to-l from-accent to-secondary p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-4">
                  عندك عرض VIP ها العرض لي داروه BMD خصيصا ليك
                </h3>
                
                <div className="grid grid-cols-2 gap-6 my-6">
                  <div className="text-center">
                    <div className="text-4xl font-black mb-2">-50%</div>
                    <div className="text-sm">تخفيض على الخدمات</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black mb-2">24/7</div>
                    <div className="text-sm">دعم حصري</div>
                  </div>
                </div>

                <button className="bg-white text-accent font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  <i className="fas fa-crown ml-2"></i>
                  احصل على العرض VIP
                </button>
              </div>
            </div>

            {/* VIP Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <i className="fas fa-shipping-fast text-3xl text-accent mb-3"></i>
                <div className="font-bold">أولوية في التوصيل</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <i className="fas fa-headset text-3xl text-secondary mb-3"></i>
                <div className="font-bold">مدير حساب مخصص</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <i className="fas fa-chart-line text-3xl text-accent mb-3"></i>
                <div className="font-bold">تقارير متقدمة</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <i className="fas fa-gift text-3xl text-secondary mb-3"></i>
                <div className="font-bold">مكافآت حصرية</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { VipOfferSection };
