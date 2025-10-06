import { useState } from "react";
import { Search, Filter } from "lucide-react";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "bushes", name: "Bushes" },
    { id: "pins", name: "Pivot Pins" },
    { id: "bearings", name: "Bearings" },
    { id: "gears", name: "Gear & Transmission" },
    { id: "fabrication", name: "Fabrication & Casting" },
    { id: "hydraulic", name: "Hydraulic Rams & Tubes" },
  ];

  const brands = [
    { id: "all", name: "All Brands" },
    { id: "jcb", name: "JCB" },
    { id: "cat", name: "CAT" },
    { id: "case", name: "CASE" },
    { id: "hitachi", name: "HITACHI" },
    { id: "mahindra", name: "Mahindra" },
    { id: "ltcase", name: "L&T Case" },
    { id: "escort", name: "Escort" },
  ];

  const products = [
    {
      id: 1,
      name: "Steel Bushes",
      category: "bushes",
      brand: "jcb",
      specifications: "Inner Dia: Ø20mm-500mm | Length: 10mm-400mm",
      material: "EN8, EN31, SAE52100",
      treatment: "Induction Hardening",
    },
    {
      id: 2,
      name: "Brass Bushes",
      category: "bushes",
      brand: "cat",
      specifications: "Inner Dia: Ø20mm-500mm | Length: 10mm-400mm",
      material: "High-grade Brass",
      treatment: "Precision Machined",
    },
    {
      id: 3,
      name: "Bi-Metal Bushes",
      category: "bushes",
      brand: "case",
      specifications: "Inner Dia: Ø20mm-500mm | Length: 10mm-400mm",
      material: "Steel-Brass Composite",
      treatment: "Case Hardening",
    },
    {
      id: 4,
      name: "Forged Bushes",
      category: "bushes",
      brand: "hitachi",
      specifications: "Inner Dia: Ø20mm-250mm",
      material: "20MnCr5, EN8",
      treatment: "Induction Hardening",
    },
    {
      id: 5,
      name: "Pivot Pins - Standard",
      category: "pins",
      brand: "jcb",
      specifications: "Dia: Ø20mm-150mm | Length: 100mm-800mm",
      material: "EN31, SAE52100",
      treatment: "Full Hardening",
    },
    {
      id: 6,
      name: "Pivot Pins - Heavy Duty",
      category: "pins",
      brand: "cat",
      specifications: "Dia: Ø50mm-200mm | Length: 200mm-1000mm",
      material: "20MnCr5, EN31",
      treatment: "Induction Hardening",
    },
    {
      id: 7,
      name: "Tapered Roller Bearings",
      category: "bearings",
      brand: "mahindra",
      specifications: "Various sizes available",
      material: "High Carbon Steel",
      treatment: "Heat Treated",
    },
    {
      id: 8,
      name: "Thrust Bearings",
      category: "bearings",
      brand: "ltcase",
      specifications: "Heavy load capacity",
      material: "Alloy Steel",
      treatment: "Precision Ground",
    },
    {
      id: 9,
      name: "Transmission Gears",
      category: "gears",
      brand: "jcb",
      specifications: "Custom tooth profiles",
      material: "20MnCr5",
      treatment: "Case Hardening",
    },
    {
      id: 10,
      name: "Planetary Gears",
      category: "gears",
      brand: "cat",
      specifications: "High precision machining",
      material: "Alloy Steel",
      treatment: "Induction Hardening",
    },
    {
      id: 11,
      name: "Fabricated Components",
      category: "fabrication",
      brand: "case",
      specifications: "Custom designs",
      material: "Structural Steel",
      treatment: "Welded & Machined",
    },
    {
      id: 12,
      name: "Cast Iron Parts",
      category: "fabrication",
      brand: "hitachi",
      specifications: "Complex geometries",
      material: "Grey Cast Iron",
      treatment: "Precision Machined",
    },
    {
      id: 13,
      name: "Hydraulic Cylinders",
      category: "hydraulic",
      brand: "escort",
      specifications: "Bore: Ø50mm-350mm",
      material: "Seamless Steel",
      treatment: "Honed & Chrome Plated",
    },
    {
      id: 14,
      name: "Hydraulic Tubes",
      category: "hydraulic",
      brand: "mahindra",
      specifications: "Various lengths & diameters",
      material: "High-grade Steel",
      treatment: "Precision Honed",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.specifications.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.material.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesBrand =
      selectedBrand === "all" || product.brand === selectedBrand;

    return matchesSearch && matchesCategory && matchesBrand;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Product Catalogue
          </h1>
          <p className="text-xl text-gray-300">
            Comprehensive range of high-quality earthmoving spare parts
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent appearance-none bg-white cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent appearance-none bg-white cursor-pointer"
              >
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center">
            <div className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {filteredProducts.length}
              </span>{" "}
              products
            </div>
            {(selectedCategory !== "all" ||
              selectedBrand !== "all" ||
              searchTerm) && (
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedBrand("all");
                  setSearchTerm("");
                }}
                className="text-brand-red hover:text-red-700 font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedBrand("all");
                  setSearchTerm("");
                }}
                className="bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-red to-brand-orange rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                      {product.name.charAt(0)}
                    </div>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {brands.find((b) => b.id === product.brand)?.name}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>

                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-500">Specifications:</span>
                      <div className="text-gray-900 font-medium">
                        {product.specifications}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500">Material:</span>
                      <div className="text-gray-900 font-medium">
                        {product.material}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500">Treatment:</span>
                      <div className="text-gray-900 font-medium">
                        {product.treatment}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <button className="w-full bg-brand-red hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors">
                      Request Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We offer custom manufacturing for specialized requirements
          </p>
          <button className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Contact Us for Custom Solutions
          </button>
        </div>
      </section>
    </div>
  );
}
