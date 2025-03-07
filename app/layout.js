'use client';
import { Inter } from 'next/font/google';
import { createContext, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Create theme context
export const ThemeContext = createContext({ darkMode: false });

// Sidebar component
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path for active state
  
  return (
    <div
      className="fixed top-0 left-0 h-full z-20"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="h-full flex">
        {/* Trigger area - more visible now */}
        <div 
          className={`w-3 h-full bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-300 
            ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* Sidebar content */}
        <div 
          className={`bg-gradient-to-r from-pink-100 to-purple-100 h-full overflow-hidden 
            transition-all duration-500 ease-in-out shadow-lg
            ${isOpen ? 'w-64' : 'w-0'}`}
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Navigation
            </h2>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/" 
                  className={`block p-3 rounded-lg transition-all duration-300
                    ${pathname === '/' 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30' 
                      : 'text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/30'}
                    transform hover:translate-x-1`}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/dashboard" 
                  className={`block p-3 rounded-lg transition-all duration-300
                    ${pathname === '/dashboard' 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30' 
                      : 'text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/30'}
                    transform hover:translate-x-1`}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a 
                  href="/pricing" 
                  className={`block p-3 rounded-lg transition-all duration-300
                    ${pathname === '/pricing' 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30' 
                      : 'text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/30'}
                    transform hover:translate-x-1`}
                >
                  Pricing
                </a>
              </li>
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
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Sidebar />
          <nav className="bg-white bg-opacity-70 backdrop-blur-sm shadow-md p-4 relative z-10">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                SaaS Demo
              </h1>
              <div className="flex items-center space-x-4">
                <a href="/pricing" className="text-gray-600 hover:text-purple-600">Pricing</a>
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
