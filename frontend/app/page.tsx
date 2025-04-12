import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Influencer Marketing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Connect with the perfect influencers for your brand using advanced
            AI technology. Maximize your marketing ROI with data-driven
            influencer partnerships.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">AI Matching</h3>
              <p className="text-gray-600">
                Find the perfect influencers for your brand using our advanced
                AI algorithms.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Campaign Management
              </h3>
              <p className="text-gray-600">
                Easily manage and track your influencer marketing campaigns in
                one place.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Analytics</h3>
              <p className="text-gray-600">
                Get detailed insights and ROI metrics for all your influencer
                partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
