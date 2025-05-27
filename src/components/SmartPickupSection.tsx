
const SmartPickupSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="section-container">
        <div className="text-center mb-16 reveal-animation">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <i className="fas fa-truck-loading text-4xl text-primary"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ramassage ذكي منين ما كنتي
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 reveal-animation">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-primary mb-6 text-center">
                كنخدو الطلبات من دارك
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse p-6 bg-accent/5 rounded-xl">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold animate-pulse-scale">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary">طلبية واحدة فقط</h4>
                    <p className="text-gray-600">في المدن الكبيرة</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse p-6 bg-secondary/5 rounded-xl">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-xl font-bold animate-pulse-scale delay-300">
                    10
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary">10 طلبيات</h4>
                    <p className="text-gray-600">في الجهات الأخرى</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                خدمات إضافية
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <i className="fas fa-box-open text-3xl text-accent mb-2"></i>
                  <p className="font-medium text-primary">تغليف</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <i className="fas fa-tags text-3xl text-secondary mb-2"></i>
                  <p className="font-medium text-primary">تيتيماج</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <i className="fas fa-clipboard-check text-3xl text-primary mb-2"></i>
                  <p className="font-medium text-primary">تحضير</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <i className="fas fa-warehouse text-3xl text-accent mb-2"></i>
                  <p className="font-medium text-primary">جمع المخزون</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-l from-accent/10 to-secondary/10 rounded-xl text-center">
                <p className="text-lg font-bold text-primary">كامل علينا!</p>
              </div>
            </div>
          </div>

          {/* Process Visualization */}
          <div className="reveal-animation">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">عملية الجمع الذكي</h3>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-center space-x-6 space-x-reverse">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-xl font-bold animate-bounce">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary mb-2">طلب الجمع</h4>
                    <p className="text-gray-600">تتصل بينا أو تدير الطلب عبر الموقع</p>
                  </div>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-2xl text-accent"></i>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <i className="fas fa-arrow-down text-2xl text-gray-300 animate-bounce"></i>
                </div>

                {/* Step 2 */}
                <div className="flex items-center space-x-6 space-x-reverse">
                  <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-xl font-bold animate-bounce delay-300">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary mb-2">الجمع من دارك</h4>
                    <p className="text-gray-600">فريقنا كيجي يجمع الطلبات من عندك</p>
                  </div>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-truck-loading text-2xl text-secondary"></i>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <i className="fas fa-arrow-down text-2xl text-gray-300 animate-bounce"></i>
                </div>

                {/* Step 3 */}
                <div className="flex items-center space-x-6 space-x-reverse">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold animate-bounce delay-500">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary mb-2">تحضير وتوصيل</h4>
                    <p className="text-gray-600">كنحضرو ونوصلو للزبناء ديالك</p>
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-shipping-fast text-2xl text-primary"></i>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=400&h=300" 
                  alt="BMD Smart Pickup"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SmartPickupSection };
