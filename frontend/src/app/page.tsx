import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            AI-Powered Influencer Marketing Platform
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect with the perfect influencers for your brand through our
            intelligent matching system. Streamline your campaigns and maximize
            ROI.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/signup"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Sign in <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Powerful features for brands and influencers
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our platform provides all the tools you need to manage successful
              influencer marketing campaigns.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    name: "AI-Powered Matching",
    description:
      "Our intelligent system analyzes data to match brands with the perfect influencers based on audience demographics, engagement metrics, and content style.",
  },
  {
    name: "Secure Payments",
    description:
      "Built-in escrow system ensures secure transactions between brands and influencers, with milestone-based payments and dispute resolution.",
  },
  {
    name: "Campaign Analytics",
    description:
      "Comprehensive analytics and reporting tools to track campaign performance, ROI, and audience engagement metrics.",
  },
];
