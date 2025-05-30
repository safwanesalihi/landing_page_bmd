import { scrollToContact } from '@/utils/scrollUtils';

const ClosingSection = () => {
  return (
    <section className="py-20 bg-white scroll-section" id="contact-section">
      <div className="section-container">
        <div className="text-center mb-12 reveal-animation">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8">
            ابدأ مع BMD اليوم
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-right space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                مع BMD، كتقدر تركز على تطوير البيزنس ديالك وخلي التوصيل علينا.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                أكثر من 900 براند مغربي كيثيقو فينا، وكنفتخرو بخدمتهم بأعلى مستويات الجودة.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                تواصل معانا اليوم وابدأ رحلتك مع أفضل شريك للتوصيل في المغرب.
              </p>
              
              <button 
                onClick={scrollToContact}
                className="btn-on-white text-xl"
              >
                تواصل معنا الآن
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/13060-closing-section.png" 
                alt="BMD Partnership"
                className="w-full h-auto object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl" id="contact-form">
            <h3 className="text-2xl font-bold text-primary mb-8">تواصل معنا</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">الاسم الكامل</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">رسالتك</label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit"
                  className="btn-primary w-full text-xl"
                >
                  إرسال الطلب
                </button>
              </div>
            </form>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <i className="fas fa-phone text-3xl text-blue-600 mb-4"></i>
                <h4 className="font-bold text-lg text-primary">اتصل بنا</h4>
                <p className="text-gray-600">+212 522 123 456</p>
              </div>
              
              <div className="text-center">
                <i className="fas fa-envelope text-3xl text-blue-600 mb-4"></i>
                <h4 className="font-bold text-lg text-primary">راسلنا</h4>
                <p className="text-gray-600">contact@bmd.ma</p>
              </div>
              
              <div className="text-center">
                <i className="fas fa-map-marker-alt text-3xl text-blue-600 mb-4"></i>
                <h4 className="font-bold text-lg text-primary">زورنا</h4>
                <p className="text-gray-600">الدار البيضاء، المغرب</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ClosingSection };
