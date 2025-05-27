
const ClosingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        {/* Main Closing Content */}
        <div className="text-center mb-16 reveal-animation">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8">
            خلي التجارة ديالك تكبر معانا
          </h2>
          <p className="text-2xl text-gray-600 mb-8">
            مئاتديال الستورز كيخدمو مع BMD
          </p>
          <p className="text-xl text-secondary font-medium">
            جرب الخدمة، غادي تشوف الفرق، و ما غاديش تبدلنا!
          </p>
        </div>

        {/* Growth Chart */}
        <div className="mb-16 reveal-animation">
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">نمو أعمالك مع BMD</h3>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Chart Visualization */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-end justify-center space-x-2 space-x-reverse h-64">
                  <div className="bg-gray-300 w-12 h-16 rounded-t flex items-end justify-center pb-2">
                    <span className="text-xs font-bold">قبل</span>
                  </div>
                  <div className="bg-gradient-to-t from-accent to-accent/70 w-12 h-48 rounded-t flex items-end justify-center pb-2 animate-pulse-scale">
                    <span className="text-xs font-bold text-white">بعد</span>
                  </div>
                  <div className="bg-gradient-to-t from-secondary to-secondary/70 w-12 h-56 rounded-t flex items-end justify-center pb-2 animate-pulse-scale delay-300">
                    <span className="text-xs font-bold text-white">مع VIP</span>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <div className="text-lg font-bold text-primary">نمو المبيعات</div>
                  <div className="text-sm text-gray-600">خلال 3 أشهر</div>
                </div>
              </div>

              {/* Success Stats */}
              <div className="space-y-6">
                <div className="service-card text-center">
                  <div className="text-4xl font-bold text-accent mb-2 animate-pulse-scale">+300%</div>
                  <div className="text-lg font-medium text-primary">زيادة في المبيعات</div>
                </div>
                
                <div className="service-card text-center">
                  <div className="text-4xl font-bold text-secondary mb-2 animate-pulse-scale delay-300">95%</div>
                  <div className="text-lg font-medium text-primary">رضا العملاء</div>
                </div>
                
                <div className="service-card text-center">
                  <div className="text-4xl font-bold text-primary mb-2 animate-pulse-scale delay-500">24/7</div>
                  <div className="text-lg font-medium text-primary">خدمة مستمرة</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16 reveal-animation">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">ماذا يقول عملاؤنا</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-user text-2xl text-accent"></i>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "BMD غيرو حياة البيزنس ديالي. كنت كنخسر عملاء بسبب التأخير، دابا كلشي كيوصل فالوقت."
              </p>
              <div className="font-bold text-primary">سعد المقداد</div>
              <div className="text-sm text-gray-500">متجر الأزياء</div>
            </div>

            <div className="service-card text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-user text-2xl text-secondary"></i>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "الخدمة ديالهم فوق الممتاز. التخزين مجاني والإرجاع بلا مشاكل. نصيحتي لأي تاجر يجرب معاهم."
              </p>
              <div className="font-bold text-primary">فاطمة بنعلي</div>
              <div className="text-sm text-gray-500">متجر الجمال</div>
            </div>

            <div className="service-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-user text-2xl text-primary"></i>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "من أول يوم معاهم والمبيعات كتزيد. الزبناء راضيين والخدمة محترمة بزاف."
              </p>
              <div className="font-bold text-primary">يوسف العلوي</div>
              <div className="text-sm text-gray-500">متجر الإلكترونيات</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center reveal-animation">
          <div className="bg-gradient-to-l from-primary via-secondary to-accent p-12 rounded-3xl text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              سيفط لينا دابا – الفريق ديالنا كيسناك!
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">تواصل معنا</h4>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="الاسم"
                    className="w-full p-3 rounded-lg text-primary border-none outline-none"
                  />
                  <input 
                    type="tel" 
                    placeholder="رقم الهاتف"
                    className="w-full p-3 rounded-lg text-primary border-none outline-none"
                  />
                  <input 
                    type="text" 
                    placeholder="اسم المتجر"
                    className="w-full p-3 rounded-lg text-primary border-none outline-none"
                  />
                  <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                    أرسل الطلب
                  </button>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <div className="font-bold">اتصل بنا</div>
                    <div className="text-blue-100">+212 600 000 000</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <i className="fab fa-whatsapp text-white"></i>
                  </div>
                  <div>
                    <div className="font-bold">واتساب</div>
                    <div className="text-blue-100">تواصل فوري</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <div className="font-bold">البريد الإلكتروني</div>
                    <div className="text-blue-100">info@bmd.ma</div>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn-primary text-2xl px-12 py-6">
              <i className="fas fa-rocket ml-4"></i>
              تواصل معنا الآن
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-3xl font-black text-primary mb-4 md:mb-0">BMD</div>
            
            <div className="flex items-center space-x-6 space-x-reverse mb-4 md:mb-0">
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <i className="fab fa-whatsapp text-2xl"></i>
              </a>
            </div>
            
            <div className="text-gray-600">
              © 2024 BMD. جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ClosingSection };
