import Counter from '../component/Counter';
import InteractiveQuote from '../component/InteractiveQuote';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8f3d6] px-4 py-8 relative">
      {/* Background with gradient instead of image */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-purple-200/30 to-blue-200/30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-3xl bg-gradient-to-br from-purple-300/20 to-pink-300/20 blur-2xl"></div>
      </div>

      <div className="container mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Our SaaS Platform</h1>
          <p className="text-xl text-gray-600 mb-8">Experience the power of our amazing features</p>
        </section>
        
        {/* Interactive Quote Section */}
        <InteractiveQuote />
        
        <section className="my-16">
          <Counter />
        </section>
        
        {/* Updated feature cards with larger size and different styling */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="p-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform">
            <div className="text-3xl mb-4 text-purple-600">✨</div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Premium Features</h3>
            <p className="text-gray-700 text-lg mb-6">Amazing feature description goes here. Discover how our platform can transform your workflow.</p>
            <a href="/pricing" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg">
              View Pricing
            </a>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform">
            <div className="text-3xl mb-4 text-blue-600">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">Advanced Tools</h3>
            <p className="text-gray-700 text-lg mb-6">Another fantastic feature description. Our tools are designed to boost your productivity.</p>
            <a href="/pricing" className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg">
              View Pricing
            </a>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform">
            <div className="text-3xl mb-4 text-pink-600">💎</div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">Enterprise Solutions</h3>
            <p className="text-gray-700 text-lg mb-6">Yet another great feature description. Scale your business with our enterprise-grade solutions.</p>
            <a href="/pricing" className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg font-medium hover:from-pink-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg">
              View Pricing
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
