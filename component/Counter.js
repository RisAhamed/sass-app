'use client';
import { useState, useContext } from 'react';
import { ThemeContext } from '../app/layout'; // Import ThemeContext

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-md font-medium relative
      transition-all duration-300 transform hover:scale-105
      shadow-md hover:shadow-xl
      before:absolute before:inset-0 before:rounded-md before:z-[-1]
      before:transition-opacity before:opacity-0 hover:before:opacity-100
      before:bg-current before:blur-xl ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center gap-6 p-10 rounded-xl backdrop-blur-sm 
                    bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-30 
                    shadow-2xl border border-white border-opacity-20">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text 
                     bg-gradient-to-r from-purple-600 to-pink-500 
                     dark:from-blue-400 dark:to-purple-400">
        Counter Component
      </h2>
      <p className="text-2xl font-semibold text-gray-800 dark:text-white">Count: {count}</p>
      <div className="flex gap-6">
        <Button
          onClick={() => setCount(count + 1)}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                    hover:from-blue-600 hover:to-purple-600
                    before:bg-blue-400 before:blur-xl"
        >
          Increment
        </Button>
        <Button
          onClick={() => setCount(count - 1)}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white 
                    hover:from-pink-600 hover:to-purple-600
                    before:bg-pink-400 before:blur-xl"
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
