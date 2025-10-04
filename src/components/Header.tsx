import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Manufacturing', id: 'manufacturing' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <div className="bg-brand-red text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919510477724" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 95104 77724</span>
            </a>
            <a href="mailto:shreeramhydraulic100@gmail.com" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">shreeramhydraulic100@gmail.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm">ISO 9001:2015 Certified</div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-orange rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  KSP
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">Shree Ram Hydraulic</div>
                  <div className="text-xs text-gray-600">KSP Earthmoving Spare Parts</div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`${
                    currentPage === item.id
                      ? 'text-brand-red font-semibold border-b-2 border-brand-red'
                      : 'text-gray-700 hover:text-brand-red'
                  } px-3 py-2 text-sm transition-colors`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`${
                    currentPage === item.id
                      ? 'bg-brand-red text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
