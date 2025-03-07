'use client';
import { Inter } from 'next/font/google';
import { createContext, useState } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Create theme context
export const ThemeContext = createContext({ darkMode: false });

// Sidebar component
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div
      className="fixed top-0 left-0 h-full z-20"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="h-full flex">
        {/* Visible trigger button when closed */}
        <div 
          className={`w-8 h-full flex items-center justify-center bg-pink-300 hover:bg-pink-400 transition-colors duration-300 ${isOpen ? 'hidden' : 'block'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
        {/* Sidebar content */}
        <div 
          className={`bg-gradient-to-r from-pink-100 to-purple-100 h-full overflow-hidden transition-all duration-300 ease-in-out shadow-lg ${
            isOpen ? 'w-64' : 'w-0'
          }`}
        >
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-purple-800">Page Contents</h2>
            <ul className="space-y-2">
              <li><a href="/" className="text-purple-600 hover:underline">Home</a></li>
              <li><a href="/dashboard" className="text-purple-600 hover:underline">Dashboard</a></li>
              <li><a href="#" className="text-purple-600 hover:underline">Features</a></li>
              <li><a href="#" className="text-purple-600 hover:underline">Pricing</a></li>
              <li><a href="#" className="text-purple-600 hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

function RootLayout({ children }) {
  return (
    <ThemeContext.Provider value={{ darkMode: false }}>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Sidebar />
          <nav className="bg-white bg-opacity-70 backdrop-blur-sm shadow-md p-4 relative z-10">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">SaaS Demo</h1>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-purple-600">Features</a>
                <a href="#" className="text-gray-600 hover:text-purple-600">Pricing</a>
                <a href="#" className="text-gray-600 hover:text-purple-600">Contact</a>
              </div>
            </div>
          </nav>
          <div className="ml-8">
            {children}
          </div>
        </body>
      </html>
    </ThemeContext.Provider>
  );
}

export default RootLayout;
