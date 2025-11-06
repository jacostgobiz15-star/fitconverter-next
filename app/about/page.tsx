export const metadata = {
  title: "About FitConverter.net",
};

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="gradient-text">About FitConverter.net</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're passionate about making fitness nutrition simple and accurate.
          No more guessing — get precise measurements and macro information for all your favorite fitness foods.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-8 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            FitConverter.net solves inconsistent food measurements. Whether you’re tracking macros for muscle gain or fat loss,
            accurate numbers matter. This tool provides instant conversions and reliable macro data for common foods.
          </p>
        </section>

        <section className="p-8 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
          <ul className="text-gray-600 space-y-2">

            <li>✅ Comprehensive, accurate nutrition database</li>
            <li>⚡ Instant and easy-to-use converter</li>
            <li>📱 Works on any device, anywhere</li>
            <li>💚 Always free</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
