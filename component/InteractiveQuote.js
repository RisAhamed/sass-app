'use client';
import { useState, useEffect } from 'react';

export default function InteractiveQuote() {
  const [isHovered, setIsHovered] = useState(false);
  const [quote, setQuote] = useState({
    text: "Innovation distinguishes between a leader and a follower. The best way to predict the future is to create it.",
    author: "SaaS Visionary",
    title: "CEO, Our Platform"
  });

  return (
    <div 
      className={`relative mx-auto max-w-3xl my-12 p-8 rounded-xl bg-white bg-opacity-40 backdrop-blur-md shadow-xl overflow-hidden border border-white border-opacity-20 transform transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 left-40 w-20 h-20 bg-gradient-to-r from-pink-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Quote marks */}
      <div className="absolute top-3 left-3 text-6xl text-purple-300 opacity-40">"</div>
      <div className="absolute bottom-3 right-6 text-6xl text-purple-300 opacity-40">"</div>
      
      {/* Quote content */}
      <div className="relative z-10">
        <p className="text-xl md:text-2xl font-serif text-gray-800 mb-4 italic">
          {quote.text}
        </p>
        <div className="flex items-center mt-6">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
            {quote.author.charAt(0)}
          </div>
          <div className="ml-4">
            <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              {quote.author}
            </p>
            <p className="text-sm text-gray-600">{quote.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 