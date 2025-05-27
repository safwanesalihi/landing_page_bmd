
const CompleteServiceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 reveal-animation">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            BMD: خدمة كاملة باش تولي التجارة ديالك طايرة
          </h2>
          <p className="text-2xl text-blue-600 font-medium mb-8">
            5 سنين ديال الخبرة + خدمة متكاملة = راحة بالك كاملة!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative reveal-animation">
            <div className="relative">
              <img 
                src="/lovable-uploads/66b37649-524c-4c0f-bd1d-da52abb2673e.png" 
                alt="BMD Customer Support"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-6 rounded-2xl shadow-xl animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">سنوات</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-6 rounded-2xl shadow-xl animate-float delay-500">
                <div className="text-center">
                  <div className="text-3xl font-bold">900+</div>
                  <div className="text-sm">براند</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-6 reveal-animation">
            <div className="service-card group hover:bg-blue-50">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className="fas fa-clock text-2xl text-blue-600 group-hover:text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">توصيل سريع</h3>
                  <p className="text-blue-600">أسرع خدمة توصيل في المغرب</p>
                </div>
              </div>
            </div>

            <div className="service-card group hover:bg-blue-50">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <i className="fas fa-shopping-bag text-2xl text-blue-600 group-hover:text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">جمع الطلبات</h3>
                  <p className="text-blue-600">نجمع طلباتك من أي مكان</p>
                </div>
              </div>
            </div>

            <div className="service-card group hover:bg-blue-50">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                  <i className="fas fa-box text-2xl text-blue-600 group-hover:text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">تخزين</h3>
                  <p className="text-blue-600">تخزين آمن ومجاني</p>
                </div>
              </div>
            </div>

            <div className="service-card group hover:bg-blue-50">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className="fas fa-exchange-alt text-2xl text-blue-600 group-hover:text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">رجوع بدون مصاريف</h3>
                  <p className="text-blue-600">إرجاع مجاني ومضمون</p>
                </div>
              </div>
            </div>

            {/* Benefits Summary */}
            <div className="bg-gradient-to-l from-blue-700 to-blue-600 p-8 rounded-2xl text-white text-center mt-8">
              <p className="text-2xl font-bold mb-2">معانا، كتربح الوقت، الكليان، والتقة!</p>
              <button className="btn-secondary mt-4">
                اكتشف المزيد
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CompleteServiceSection };
