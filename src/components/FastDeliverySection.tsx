
import { scrollToContact } from '@/utils/scrollUtils';

const FastDeliverySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 reveal-animation">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8">
            توصيل سريع : أقل من 12 ساعة ف المدن الكبيرة!
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-center md:text-right space-y-6">
              <div className="text-2xl md:text-3xl text-secondary font-medium">
                <i className="fas fa-shipping-fast text-4xl text-blue-600 mb-4 block"></i>
                أقل من 12 ساعة ف: كازا، الرباط، مراكش، فاس…
              </div>
              
              <div className="text-xl text-gray-600">
                أقل من 24 ساعة ف جميع المناطق الأخرى
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                كنتواجدو فـ كازا و عندنا فروع ف جميع المدن المغربية لتغطية شاملة و فعالة.
              </p>
              
              <button 
                onClick={scrollToContact}
                className="btn-secondary text-xl"
              >
                <i className="fas fa-rocket ml-3"></i>
                اطلب الخدمة الآن
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/66b37649-524c-4c0f-bd1d-da52abb2673e.png" 
                alt="BMD Fast Delivery"
                className="w-full h-80 object-cover rounded-2xl shadow-xl animate-float"
              />
              
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                12 ساعة
              </div>
            </div>
          </div>
          
          {/* Delivery Timeline */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-8">مواقيت التوصيل</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-lg font-medium text-primary">ساعة للمدن الكبيرة</div>
                <div className="text-sm text-gray-600 mt-2">كازا، الرباط، مراكش، فاس</div>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">24</div>
                <div className="text-lg font-medium text-primary">ساعة للمناطق الأخرى</div>
                <div className="text-sm text-gray-600 mt-2">جميع أنحاء المملكة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FastDeliverySection };
