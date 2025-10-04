import { CheckCircle, Target, Globe, Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Expand our global dealer network while delivering on-time, zero-defect products that exceed industry standards.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'ISO 9001:2015 certified with rigorous testing and quality control at every production stage.',
    },
    {
      icon: Globe,
      title: 'Global Presence',
      description: 'Serving 150+ dealers across India and expanding our footprint in international markets.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building long-term partnerships through reliability, transparency, and exceptional service.',
    },
  ];

  const achievements = [
    { number: '12+', label: 'Years of Excellence' },
    { number: '150+', label: 'Dealer Partnerships' },
    { number: '7+', label: 'OEM Brands Supported' },
    { number: '1000+', label: 'Products Manufactured' },
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'Advanced Manufacturing Standards',
    'Export Quality Compliance',
    'Industry Safety Standards',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZCQkYyNCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Since 2013
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Shree Ram Hydraulic
            </h1>
            <p className="text-xl text-gray-300">
              Leading the earthmoving spare parts industry with innovation, quality, and customer commitment
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-red mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Established in 2013, <span className="font-semibold text-gray-900">Shree Ram Hydraulic</span> (operating as KSP Earthmoving Spare Parts) has grown into India's premier manufacturer and global supplier of high-quality earthmoving spare parts.
                </p>
                <p>
                  From our state-of-the-art facility in Rajkot, Gujarat, we serve a network of 150+ dealers across India and expanding international markets. Our commitment to excellence has made us the trusted partner for procurement managers, distributors, and mechanics worldwide.
                </p>
                <p>
                  We specialize in manufacturing precision components including bushes, pivot pins, bearings, gears, hydraulic systems, and custom fabrication. Our products are compatible with all major OEM brands including JCB, CAT, CASE, HITACHI, Mahindra, L&T Case, and Escort.
                </p>
                <p className="font-semibold text-gray-900">
                  Our mission is clear: expand our global dealer network while maintaining our zero-defect commitment and on-time delivery standards.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-red to-red-800 text-white p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">ISO 9001:2015 Certified</div>
                    <div className="text-red-100 text-sm">Internationally recognized quality standards</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Advanced Manufacturing</div>
                    <div className="text-red-100 text-sm">CNC, VMC, forging, and precision grinding</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Zero Defect Policy</div>
                    <div className="text-red-100 text-sm">Rigorous quality control and testing</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">On-Time Delivery</div>
                    <div className="text-red-100 text-sm">Reliable logistics and supply chain</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Cost-Effective Solutions</div>
                    <div className="text-red-100 text-sm">Competitive pricing without compromising quality</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Global Export Ready</div>
                    <div className="text-red-100 text-sm">Serving international markets with excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values & Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guided by principles that drive excellence in everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-red to-brand-orange rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Certifications & Standards
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our commitment to quality is validated by international certifications and adherence to the highest industry standards.
              </p>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-semibold text-gray-900">{cert}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-2xl">
              <div className="mb-8">
                <TrendingUp className="w-16 h-16 text-brand-yellow mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <p className="text-gray-300 leading-relaxed">
                  We are dedicated to continuous improvement, innovation, and maintaining the trust of our global dealer network. Every product that leaves our facility meets the strictest quality standards.
                </p>
              </div>
              <div className="border-t border-gray-700 pt-6">
                <div className="text-3xl font-bold text-brand-yellow mb-2">100%</div>
                <div className="text-gray-300">Quality Assurance on Every Product</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-brand-red to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Global Network
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Partner with India's leading earthmoving spare parts manufacturer
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-lg">
              150+ Active Dealers
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-lg">
              Global Export Ready
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-lg">
              ISO Certified
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
