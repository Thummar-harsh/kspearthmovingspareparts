import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-orange rounded-lg flex items-center justify-center text-white font-bold text-xl">
                KSP
              </div>
              <div>
                <div className="text-xl font-bold text-white">
                  Shree Ram Hydraulic
                </div>
                <div className="text-xs">KSP Earthmoving Spare Parts</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              India's Leading Manufacturer & Global Supplier of Earthmoving
              Spare Parts. ISO 9001:2015 Certified Company.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact Information
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+919510477724"
                className="flex items-start gap-3 hover:text-brand-yellow transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+91 95104 77724</span>
              </a>
              <a
                href="mailto:shreeramhydraulic100@gmail.com"
                className="flex items-start gap-3 hover:text-brand-yellow transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">shreeramhydraulic100@gmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Dhwani Ind. Park -2, SIDC Road, Veraval Shapar, Dist.
                  Rajkot-360024, Gujarat (India)
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Our Expertise</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></div>
                Bushes & Pivot Pins
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></div>
                Bearings & Gears
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></div>
                Hydraulic Components
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></div>
                Fabrication & Casting
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-yellow" />
                Global Export Services
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Shree Ram Hydraulic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
