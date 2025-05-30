import { scrollToContact } from '@/utils/scrollUtils';

const VipOfferSection = () => {
  return (
    <section className="py-20 bg-gradient-to-l from-blue-800 via-blue-700 to-blue-600 text-white scroll-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12 reveal-animation">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            عروض VIP للشركات الكبيرة
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-right space-y-6">
              <p className="text-xl text-blue-100 leading-relaxed">
                للشركات الكبيرة، كنوفرو عروض VIP خاصة مع مميزات حصرية وأسعار تنافسية.
              </p>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                كل شركة كتستافد من مدير حساب خاص يتابع معاها كل التفاصيل ويضمن أعلى مستوى من الخدمة.
              </p>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                تواصل معانا اليوم للحصول على عرض خاص يناسب احتياجات الشركة ديالك.
              </p>
              
              <button 
                onClick={scrollToContact}
                className="btn-on-blue text-xl"
              >
                احصل على عرض خاص
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/6704-vip-offer.png" 
                alt="BMD VIP Offers"
                className="w-full h-auto object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
          
          {/* VIP Features */}
          <div className="bg-white rounded-3xl p-8 shadow-xl mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6">مميزات عروض VIP</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-blue-100 p-3 rounded-full">
                  <i className="fas fa-star text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">أسعار تنافسية</h4>
                  <p className="text-gray-600">أسعار خاصة للشركات الكبيرة</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-blue-100 p-3 rounded-full">
                  <i className="fas fa-star text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">مدير حساب خاص</h4>
                  <p className="text-gray-600">مدير حساب مخصص لخدمتك</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-blue-100 p-3 rounded-full">
                  <i className="fas fa-star text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">أولوية التوصيل</h4>
                  <p className="text-gray-600">أولوية في التوصيل والاستلام</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-blue-100 p-3 rounded-full">
                  <i className="fas fa-star text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">تقارير متقدمة</h4>
                  <p className="text-gray-600">تقارير تحليلية متقدمة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { VipOfferSection };
