import Image from "next/image";
import { ArrowRight, BarChart2, Users, Zap, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">Reachly</div>
        <div className="flex gap-6">
          <a
            href="#features"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Pricing
          </a>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            AI-Powered Influencer Marketing Platform
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect{" "}
            <span className="text-indigo-600">Influencer Match</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Connect with the perfect influencers for your brand using advanced
            AI technology. Maximize your marketing ROI with data-driven
            influencer partnerships.
          </p>
          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                10K+
              </div>
              <div className="text-gray-600">Active Influencers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">5K+</div>
              <div className="text-gray-600">Brands</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                $50M+
              </div>
              <div className="text-gray-600">Campaign Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to run successful influencer campaigns
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Matching</h3>
              <p className="text-gray-600 mb-4">
                Find the perfect influencers for your brand using our advanced
                AI algorithms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 size={16} className="text-indigo-600" />
                  Smart matching based on audience demographics
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 size={16} className="text-indigo-600" />
                  Real-time performance predictions
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Campaign Management
              </h3>
              <p className="text-gray-600 mb-4">
                Easily manage and track your influencer marketing campaigns in
                one place.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 size={16} className="text-indigo-600" />
                  Automated workflow management
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 size={16} className="text-indigo-600" />
                  Content approval system
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart2 className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics</h3>
              <p className="text-gray-600 mb-4">
                Get detailed insights and ROI metrics for all your influencer
                partnerships.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 size={16} className="text-indigo-600" />
                  Real-time performance tracking
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 size={16} className="text-indigo-600" />
                  Customizable reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to launch your influencer campaign
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Define Your Goals</h3>
              <p className="text-gray-600">
                Set your campaign objectives and target audience
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Influencers</h3>
              <p className="text-gray-600">
                Our AI matches you with perfect influencers
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch Campaign</h3>
              <p className="text-gray-600">
                Manage and track your campaign progress
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Measure Results</h3>
              <p className="text-gray-600">Analyze performance and optimize</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-indigo-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of brands who are already using Reachly to power
              their influencer marketing campaigns.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">Reachly</div>
              <p className="text-sm">
                AI-powered influencer marketing platform for modern brands.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-sm">© 2024 Reachly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
