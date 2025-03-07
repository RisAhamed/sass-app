'use client';
import { useState } from 'react';
import Link from 'next/link';

// Pricing toggle component
const PricingToggle = ({ isAnnual, setIsAnnual }) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-12">
      <span className={`text-lg ${!isAnnual ? 'text-white font-semibold' : 'text-gray-400'}`}>Monthly</span>
      <button 
        onClick={() => setIsAnnual(!isAnnual)}
        className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-700"
      >
        <span className="sr-only">Toggle pricing</span>
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-transform ${
            isAnnual ? 'translate-x-9' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-lg ${isAnnual ? 'text-white font-semibold' : 'text-gray-400'}`}>Annual</span>
      <span className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-medium text-white">
        Save 20%
      </span>
    </div>
  );
};

// Pricing card component
const PricingCard = ({ 
  title, 
  price, 
  annualPrice, 
  isAnnual, 
  description, 
  features, 
  cta, 
  popular = false,
  gradient = "from-purple-500 to-pink-500"
}) => {
  return (
    <div className={`rounded-2xl ${popular ? 'border-2 border-purple-500' : 'border border-gray-800'} bg-gray-900 p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-white text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="mb-6">
        <p className="text-4xl font-bold text-white">
          ${isAnnual ? annualPrice : price}
          <span className="text-lg text-gray-400 font-normal">/mo</span>
        </p>
        {isAnnual && (
          <p className="text-sm text-gray-400 mt-1">Billed annually (${annualPrice * 12}/year)</p>
        )}
      </div>
      
      <p className="text-gray-400 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 px-4 rounded-lg bg-gradient-to-r ${gradient} text-white font-medium hover:opacity-90 transition-opacity`}>
        {cta}
      </button>
    </div>
  );
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero section */}
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Choose the perfect plan for your needs. Always know what you'll pay.
            </p>
            
            <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Starter"
                price={29}
                annualPrice={19}
                isAnnual={isAnnual}
                description="Perfect for individuals and small projects."
                features={[
                  "Up to 5 projects",
                  "Basic analytics",
                  "24-hour support response time",
                  "1GB storage",
                  "Standard features"
                ]}
                cta="Get Started"
                gradient="from-blue-500 to-purple-500"
              />
              
              <PricingCard
                title="Professional"
                price={79}
                annualPrice={59}
                isAnnual={isAnnual}
                description="Ideal for growing teams and businesses."
                features={[
                  "Unlimited projects",
                  "Advanced analytics",
                  "4-hour support response time",
                  "10GB storage",
                  "All standard features",
                  "Advanced collaboration tools"
                ]}
                cta="Get Started"
                popular={true}
                gradient="from-purple-500 to-pink-500"
              />
              
              <PricingCard
                title="Enterprise"
                price={199}
                annualPrice={159}
                isAnnual={isAnnual}
                description="For large organizations with complex needs."
                features={[
                  "Unlimited everything",
                  "Custom analytics",
                  "1-hour support response time",
                  "Unlimited storage",
                  "All professional features",
                  "Dedicated account manager",
                  "Custom integrations"
                ]}
                cta="Contact Sales"
                gradient="from-pink-500 to-orange-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Can I change my plan later?</h3>
            <p className="text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated.</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
            <p className="text-gray-400">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Do you offer a free trial?</h3>
            <p className="text-gray-400">Yes, all plans come with a 14-day free trial. No credit card required.</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">What happens when my trial ends?</h3>
            <p className="text-gray-400">At the end of your trial, you'll be prompted to select a plan. Your data will be preserved.</p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 