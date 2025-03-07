import Counter from '../component/Counter';
import Image from 'next/image';
// Import the local image with correct extension
import localCarImage from './photo-1695192193767-54887768f845.ico';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8f3d6] px-4 py-8 relative">
      {/* Background image with curved edges and shadow */}
      <div className="absolute inset-0 flex justify-center items-center -z-10 pointer-events-none overflow-hidden">
        <div className="w-[500px] h-[500px] relative">
          <div className="absolute inset-0 bg-black opacity-20 rounded-3xl blur-md transform scale-105"></div>
          {/* Using a more reliable approach for local images */}
          <div className="relative w-full h-full">
            <Image 
              src="/photo-1695192193767-54887768f845.ico"
              alt="Porsche background" 
              fill
              className="rounded-3xl object-cover opacity-25 shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <section className="text-center mb-16 relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Our SaaS Platform</h1>
          <p className="text-xl text-gray-600 mb-8">Experience the power of our amazing features</p>
          <Counter />
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
          <div className="p-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
            <p className="text-gray-600">Amazing feature description goes here</p>
          </div>
          <div className="p-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">Feature 2</h3>
            <p className="text-gray-600">Another fantastic feature description</p>
          </div>
          <div className="p-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">Feature 3</h3>
            <p className="text-gray-600">Yet another great feature description</p>
          </div>
        </section>
      </div>
    </main>
  );
}
