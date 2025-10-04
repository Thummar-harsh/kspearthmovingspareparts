import { ArrowRight, CheckCircle, Factory, Globe, Award, TrendingUp } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const categories = [
    { name: 'Bushes', description: 'Steel, Brass, Forging, Bi-Metal' },
    { name: 'Pivot Pins', description: 'High-strength precision pins' },
    { name: 'Bearings', description: 'Industrial grade bearings' },
    { name: 'Gear & Transmission', description: 'Complete gear systems' },
    { name: 'Fabrication & Casting', description: 'Custom manufacturing' },
    { name: 'Hydraulic Rams & Tubes', description: 'Heavy-duty hydraulics' },
  ];

  const brands = [
    'JCB', 'CAT', 'CASE', 'HITACHI', 'Mahindra', 'L&T Case', 'Escort'
  ];

  const capabilities = [
    { name: 'Forging', range: 'Ø20mm – Ø250mm' },
    { name: 'CNC Machining', range: 'Ø250mm × 800mm' },
    { name: 'VMC Operations', range: '850mm × 600mm' },
    { name: 'Induction Hardening', range: 'Ø50mm × 800mm' },
    { name: 'Precision Grinding', range: 'Ø3mm – Ø350mm' },
    { name: 'Complete Welding', range: 'With SPMs' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZCQkYyNCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              ISO 9001:2015 Certified Company
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              India's Leading Manufacturer & Global Supplier of{' '}
              <span className="text-brand-yellow">Earthmoving Spare Parts</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Delivering high-quality, cost-effective replacement parts to dealers, distributors, and procurement managers worldwide since 2013.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('products')}
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
              >
                Explore Catalogue
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-brand-red mb-2">2013</div>
              <div className="text-gray-600">Established</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-brand-red mb-2">150+</div>
              <div className="text-gray-600">Dealer Network</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-brand-red mb-2">7+</div>
              <div className="text-gray-600">OEM Brands</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-brand-red mb-2">100%</div>
              <div className="text-gray-600">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Shree Ram Hydraulic
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Established in 2013, we are a leading Manufacturer, Supplier & Exporter of premium earthmoving spare parts. Our mission is to expand our global dealer network while delivering on-time, zero-defect products.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">World-Class Manufacturing</div>
                    <div className="text-gray-600">Advanced forging, CNC, VMC, and hardening facilities</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Zero Defect Commitment</div>
                    <div className="text-gray-600">Rigorous quality control and testing procedures</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Global Export Network</div>
                    <div className="text-gray-600">Serving dealers across India and international markets</div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="mt-8 bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-brand-red to-red-700 p-8 rounded-xl text-white">
                <Factory className="w-12 h-12 mb-4" />
                <div className="text-2xl font-bold mb-2">Manufacturing Excellence</div>
                <div className="text-red-100">State-of-the-art facilities</div>
              </div>
              <div className="bg-gradient-to-br from-brand-yellow to-yellow-600 p-8 rounded-xl text-gray-900 mt-8">
                <Globe className="w-12 h-12 mb-4" />
                <div className="text-2xl font-bold mb-2">Global Reach</div>
                <div className="text-yellow-900">Worldwide distribution</div>
              </div>
              <div className="bg-gradient-to-br from-brand-orange to-orange-600 p-8 rounded-xl text-white -mt-8">
                <Award className="w-12 h-12 mb-4" />
                <div className="text-2xl font-bold mb-2">ISO Certified</div>
                <div className="text-orange-100">Quality guaranteed</div>
              </div>
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-8 rounded-xl text-white">
                <TrendingUp className="w-12 h-12 mb-4" />
                <div className="text-2xl font-bold mb-2">Trusted Partner</div>
                <div className="text-gray-300">150+ dealer network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of high-quality spare parts for all major earthmoving equipment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-brand-red rounded-xl p-6 transition-all hover:shadow-lg cursor-pointer group"
                onClick={() => onNavigate('products')}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-orange rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                  {category.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('products')}
              className="bg-brand-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
            >
              View Full Catalogue
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              OEM Compatibility
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Premium quality parts compatible with all major equipment brands
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 flex items-center justify-center text-center font-bold text-lg transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Production Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced manufacturing processes ensuring precision and quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{capability.name}</h3>
                  <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white">
                    <Factory className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-gray-600 font-medium">{capability.range}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('manufacturing')}
              className="bg-brand-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Explore Our Facilities
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-brand-red to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Join 150+ dealers worldwide who trust us for quality earthmoving spare parts
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white hover:bg-gray-100 text-brand-red px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all transform hover:scale-105"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
