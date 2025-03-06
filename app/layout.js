'use client';
import { Inter } from 'next/font/google';
import { createContext, useContext, useState, useEffect } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Create theme context
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  
  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  // Apply theme to document body
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);
  
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Sidebar component
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div
      className="fixed top-0 left-0 h-full z-10"
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
          className={`bg-gradient-to-r from-pink-100 to-purple-100 dark:from-purple-900 dark:to-gray-800 h-full overflow-hidden transition-all duration-300 ease-in-out shadow-lg ${
            isOpen ? 'w-64' : 'w-0'
          }`}
        >
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-purple-800 dark:text-pink-300">Page Contents</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-600 dark:text-pink-300 hover:underline">Home</a></li>
              <li><a href="#" className="text-purple-600 dark:text-pink-300 hover:underline">Features</a></li>
              <li><a href="#" className="text-purple-600 dark:text-pink-300 hover:underline">Pricing</a></li>
              <li><a href="#" className="text-purple-600 dark:text-pink-300 hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Theme toggle button
const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 dark:from-gray-700 dark:to-gray-800 text-yellow-500 dark:text-blue-300 transition-all hover:shadow-lg"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
};

// Metadata can't be used with 'use client' directive, so we need to handle it differently
// For simplicity, we'll skip the metadata for now

function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 dark:text-white transition-colors duration-300`}>
          <Sidebar />
          <nav className="bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 backdrop-blur-sm shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-blue-400 dark:to-purple-400">SaaS Demo</h1>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-pink-400">Features</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-pink-400">Pricing</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-pink-400">Contact</a>
                <ThemeToggle />
              </div>
            </div>
          </nav>
          <div className="ml-8">
            {children}
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}

export default RootLayout;
