import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stop Guessing Your Macros.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-teal-500 to-blue-500">
              Convert Cups → Grams → Calories
            </span>{" "}
            Instantly.
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The fastest way to measure protein powder, oats, rice, peanut butter, and more. 
            Get precise macro breakdowns in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/converter"
              className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-2xl text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 inline-block"
            >
              <i className="fas fa-calculator mr-2"></i>
              Try the Converter
            </Link>

            <Link
              href="/about"
              className="border-2 border-green-600 text-green-600 font-semibold py-4 px-8 rounded-2xl text-lg hover:bg-green-50 transition-all duration-200 inline-block"
            >
              <i className="fas fa-play mr-2"></i>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FitConverter.net?</h2>
            <p className="text-xl text-gray-600">
              Professional-grade nutrition tools for serious fitness enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-sync-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Conversions</h3>
              <p className="text-gray-600 text-lg">
                Convert between cups, scoops, tablespoons, grams, and ounces instantly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-chart-pie text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Macro Breakdown</h3>
              <p className="text-gray-600 text-lg">
                Get detailed protein, carbs, fat, and calorie information for every food item.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-mobile-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Friendly</h3>
              <p className="text-gray-600 text-lg">
                Works perfectly on any device. Use it at home, in the gym, or at the grocery store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Trusted by Fitness Enthusiasts Worldwide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                10,000+
              </h3>
              <p className="text-gray-600">Users</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                50+
              </h3>
              <p className="text-gray-600">Foods Supported</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                100%
              </h3>
              <p className="text-gray-600">Free Forever</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
