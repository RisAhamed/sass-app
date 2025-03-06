import Counter from '../component/Counter';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our SaaS Platform</h1>
        <p className="text-xl text-gray-600 mb-8">Experience the power of our amazing features</p>
        <Counter />
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Feature 1</h3>
          <p className="text-gray-600">Amazing feature description goes here</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Feature 2</h3>
          <p className="text-gray-600">Another fantastic feature description</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Feature 3</h3>
          <p className="text-gray-600">Yet another great feature description</p>
        </div>
      </section>
    </main>
  );
}
