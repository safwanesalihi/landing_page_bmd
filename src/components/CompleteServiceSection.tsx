
const CompleteServiceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 reveal-animation">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            BMD: خدمة كاملة باش تولي التجارة ديالك طايرة
          </h2>
          <p className="text-2xl text-secondary font-medium mb-8">
            5 سنين ديال الخبرة + خدمة متكاملة = راحة بالك كاملة!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative reveal-animation">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=600" 
                alt="BMD Team Excellence"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-accent text-white p-6 rounded-2xl shadow-xl animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">سنوات</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-secondary text-white p-6 rounded-2xl shadow-xl animate-float delay-500">
                <div className="text-center">
                  <div className="text-3xl font-bold">900+</div>
                  <div className="text-sm">براند</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-6 reveal-animation">
            <div className="service-card group hover:bg-accent/5">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <i className="fas fa-clock text-2xl text-accent group-hover:text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">توصيل سريع</h3>
                  <p className="text-gray-600">أسرع خدمة توصيل في المغرب</p>
                </div>
              </div>
            </div>

            <div className="service-card group hover:bg-secondary/5">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <i className="fas fa-shopping-bag text-2xl text-secondary group-hover:text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">جمع الطلبات</h3>
                  <p className="text-gray-600">نجمع طلباتك من أي مكان</p>
                </div>
              </div>
            </div>

            <div className="service-card group hover:bg-primary/5">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <i className="fas fa-box text-2xl text-primary group-hover:text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">تخزين</h3>
                  <p className="text-gray-600">تخزين آمن ومجاني</p>
                </div>
              </div>
            </div>

            <div className="service-card group hover:bg-accent/5">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <i className="fas fa-exchange-alt text-2xl text-accent group-hover:text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">رجوع بدون مصاريف</h3>
                  <p className="text-gray-600">إرجاع مجاني ومضمون</p>
                </div>
              </div>
            </div>

            {/* Benefits Summary */}
            <div className="bg-gradient-to-l from-primary to-secondary p-8 rounded-2xl text-white text-center mt-8">
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
