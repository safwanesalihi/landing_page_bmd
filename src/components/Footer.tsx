import React from 'react';

interface FooterProps {
  logo: string;
  logoAlt: string;
}

export const Footer: React.FC<FooterProps> = ({ logo, logoAlt }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="text-center md:text-right space-y-4">
            <img 
              src={logo} 
              alt={logoAlt}
              className="h-16 mx-auto md:mx-0 md:mr-auto"
            />
            <div className="h-1 w-16 bg-blue-400 mx-auto md:mx-0 md:mr-auto rounded-full"></div>
            <p className="text-gray-300">
              شريكك الموثوق في التوصيل منذ أكثر من 5 سنوات
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">الرئيسية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">خدماتنا</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">عن الشركة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">تواصل معنا</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">معلومات التواصل</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 space-x-reverse">
                <i className="fas fa-map-marker-alt text-blue-400"></i>
                <span className="text-gray-300">الدار البيضاء، المغرب</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <i className="fas fa-phone text-blue-400"></i>
                <span className="text-gray-300">+212 522 123 456</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <i className="fas fa-envelope text-blue-400"></i>
                <span className="text-gray-300">contact@bmd.ma</span>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex space-x-4 space-x-reverse justify-center md:justify-start">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full">
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full">
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full">
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full">
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} BMD. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};
