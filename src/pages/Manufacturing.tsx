import { Factory, Cog, Zap, Settings, Wrench, Shield } from 'lucide-react';

export default function Manufacturing() {
  const capabilities = [
    {
      icon: Factory,
      name: 'Forging',
      capacity: 'Ø20mm – Ø250mm',
      description: 'High-strength component production with controlled grain structure',
      features: ['Hot forging', 'Precision dies', 'Quality grain flow'],
    },
    {
      icon: Cog,
      name: 'CNC Machining',
      capacity: 'Ø250mm × Length 800mm',
      description: 'Computer-controlled precision machining for complex geometries',
      features: ['Multi-axis capability', 'Tight tolerances', 'Repeatable accuracy'],
    },
    {
      icon: Settings,
      name: 'VMC Operations',
      capacity: 'Bed size 850mm × 600mm',
      description: 'Vertical machining center for versatile component production',
      features: ['3-axis machining', 'High precision', 'Efficient production'],
    },
    {
      icon: Zap,
      name: 'Induction Hardening',
      capacity: 'Ø50mm × Length 800mm',
      description: 'Surface hardening for enhanced wear resistance',
      features: ['Localized heating', 'Consistent depth', 'Minimal distortion'],
    },
    {
      icon: Wrench,
      name: 'Precision Grinding',
      capacity: 'Ø3mm – Ø350mm',
      description: 'Fine surface finishing and dimensional accuracy',
      features: ['Cylindrical grinding', 'Mirror finish', 'Micron-level precision'],
    },
    {
      icon: Shield,
      name: 'Complete Welding',
      capacity: 'With SPMs',
      description: 'Advanced welding operations with special purpose machines',
      features: ['MIG/TIG welding', 'Automated processes', 'Quality joints'],
    },
  ];

  const processes = [
    {
      step: '01',
      title: 'Material Selection',
      description: 'Sourcing high-grade raw materials from certified suppliers',
    },
    {
      step: '02',
      title: 'Forging & Machining',
      description: 'Precision manufacturing using advanced CNC and VMC equipment',
    },
    {
      step: '03',
      title: 'Heat Treatment',
      description: 'Induction and case hardening for enhanced durability',
    },
    {
      step: '04',
      title: 'Finishing',
      description: 'Precision grinding and surface treatment for exact specifications',
    },
    {
      step: '05',
      title: 'Quality Control',
      description: 'Rigorous testing and inspection at every stage',
    },
    {
      step: '06',
      title: 'Packaging & Dispatch',
      description: 'Secure packaging and on-time delivery to global destinations',
    },
  ];

  const qualityStandards = [
    'ISO 9001:2015 Certified Manufacturing',
    'In-process Quality Inspection',
    'Final Product Testing & Verification',
    'Material Traceability System',
    'Advanced Measuring Equipment',
    'Zero Defect Policy Implementation',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZCQkYyNCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Factory className="w-4 h-4" />
              World-Class Facilities
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Manufacturing Capabilities
            </h1>
            <p className="text-xl text-gray-300">
              State-of-the-art production processes ensuring precision, quality, and reliability
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Production Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced machinery and expert craftsmanship delivering precision components
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:border-brand-red transition-all hover:shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-brand-orange rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{capability.name}</h3>
                  <div className="text-brand-red font-bold mb-4">{capability.capacity}</div>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach from raw material to finished product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processes.map((process, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-red text-white rounded-lg flex items-center justify-center font-bold text-lg">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{process.title}</h3>
                </div>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quality Assurance & Standards
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our commitment to quality is embedded in every step of our manufacturing process. From material selection to final inspection, we maintain the highest standards to ensure zero-defect delivery.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualityStandards.map((standard, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-red rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-gray-700 font-medium text-sm">{standard}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-red to-red-800 text-white p-8 md:p-12 rounded-2xl">
              <Factory className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Production Excellence</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <div className="text-red-100">Product Variants Manufactured</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-red-100">In-Process Quality Control</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">6+</div>
                  <div className="text-red-100">Advanced Manufacturing Processes</div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-red-700">
                <p className="text-red-100">
                  Our manufacturing facility is equipped with the latest technology and operated by skilled technicians committed to delivering excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <Cog className="w-12 h-12 mx-auto mb-4 text-brand-yellow" />
              <h3 className="text-xl font-bold mb-2">Advanced Machinery</h3>
              <p className="text-gray-300">
                Latest CNC, VMC, and precision equipment for superior quality
              </p>
            </div>
            <div className="text-center p-8">
              <Settings className="w-12 h-12 mx-auto mb-4 text-brand-yellow" />
              <h3 className="text-xl font-bold mb-2">Skilled Workforce</h3>
              <p className="text-gray-300">
                Experienced technicians and engineers ensuring precision
              </p>
            </div>
            <div className="text-center p-8">
              <Shield className="w-12 h-12 mx-auto mb-4 text-brand-yellow" />
              <h3 className="text-xl font-bold mb-2">Quality First</h3>
              <p className="text-gray-300">
                ISO certified processes with zero defect commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-brand-red to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Manufacturing Excellence?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Partner with us for precision components manufactured to the highest standards
          </p>
          <button className="bg-white hover:bg-gray-100 text-brand-red px-8 py-4 rounded-lg font-semibold transition-colors">
            Request a Quote
          </button>
        </div>
      </section>
    </div>
  );
}
