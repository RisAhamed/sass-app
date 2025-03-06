'use client';
import { useState, useContext } from 'react';
import { ThemeContext } from '../layout';
import Link from 'next/link';

// Reuse our Button component with glowing effect
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

// Feature Card Component
const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 bg-opacity-40 dark:bg-opacity-40 backdrop-blur-sm 
                    rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl 
                    border border-white border-opacity-20 hover:-translate-y-1">
      <div className="text-4xl mb-4 text-purple-600 dark:text-pink-400">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r 
                     from-purple-600 to-pink-500 dark:from-blue-400 dark:to-purple-400">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      <Button 
        className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                  hover:from-blue-600 hover:to-purple-600 text-sm px-4 py-2
                  before:bg-blue-400 before:blur-xl"
      >
        Learn More
      </Button>
    </div>
  );
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="min-h-screen relative">
      {/* Animated AI Background */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 
                      dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20 animate-pulse" 
             style={{ animationDuration: '10s' }}>
          {/* SVG pattern to simulate AI/tech background */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-500 dark:text-blue-400" />
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-600 dark:text-blue-500" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Animated "data" circles */}
            <circle cx="20%" cy="30%" r="5" fill="rgba(147, 51, 234, 0.7)" className="animate-ping">
              <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="70%" cy="60%" r="7" fill="rgba(219, 39, 119, 0.7)" className="animate-ping" style={{ animationDuration: '4s' }}>
              <animate attributeName="opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="45%" cy="80%" r="4" fill="rgba(96, 165, 250, 0.7)" className="animate-ping" style={{ animationDuration: '5s' }}>
              <animate attributeName="opacity" values="0.7;0.4;0.7" dur="5s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="container mx-auto px-4 py-8 pt-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-blue-400 dark:to-purple-400">
            Dashboard
          </h1>
          <Link href="/">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 before:bg-purple-400 before:blur-xl">
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Tabular Form Section */}
        <div className="bg-white dark:bg-gray-800 bg-opacity-40 dark:bg-opacity-40 backdrop-blur-sm rounded-xl shadow-lg mb-12">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'overview'
                  ? 'text-purple-600 dark:text-pink-400 border-b-2 border-purple-600 dark:border-pink-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-pink-400'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'analytics'
                  ? 'text-purple-600 dark:text-pink-400 border-b-2 border-purple-600 dark:border-pink-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-pink-400'
              }`}
              onClick={() => setActiveTab('analytics')}
            >
              Analytics
            </button>
            <button
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'settings'
                  ? 'text-purple-600 dark:text-pink-400 border-b-2 border-purple-600 dark:border-pink-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-pink-400'
              }`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
                <p className="mb-4">Here's an overview of your SaaS platform usage and metrics.</p>
                
                <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                    <h3 className="text-lg font-medium mb-2">Active Users</h3>
                    <p className="text-3xl font-bold text-purple-600 dark:text-pink-400">1,254</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                    <h3 className="text-lg font-medium mb-2">Revenue</h3>
                    <p className="text-3xl font-bold text-purple-600 dark:text-pink-400">$8,540</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                    <h3 className="text-lg font-medium mb-2">Conversion Rate</h3>
                    <p className="text-3xl font-bold text-purple-600 dark:text-pink-400">24.3%</p>
                  </div>
                </div>
                
                <form className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Campaign Name</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600" 
                        placeholder="Enter campaign name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Target Audience</label>
                      <select className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600">
                        <option>All Users</option>
                        <option>New Users</option>
                        <option>Premium Users</option>
                      </select>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 before:bg-blue-400 before:blur-xl">
                    Create Campaign
                  </Button>
                </form>
              </div>
            )}
            
            {activeTab === 'analytics' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
                <p className="mb-6">Detailed metrics and performance analytics.</p>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow mb-6">
                  <h3 className="text-lg font-medium mb-2">Monthly Growth</h3>
                  <div className="h-64 flex items-end justify-between px-2">
                    {[35, 45, 30, 65, 40, 80, 60, 75, 50, 70, 90, 85].map((value, index) => (
                      <div key={index} className="w-full mx-1">
                        <div 
                          className="bg-gradient-to-t from-purple-500 to-pink-500 dark:from-blue-500 dark:to-purple-500 rounded-t"
                          style={{ height: `${value}%` }}
                        ></div>
                        <div className="text-xs text-center mt-1">{['J','F','M','A','M','J','J','A','S','O','N','D'][index]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
                <p className="mb-6">Manage your account preferences and settings.</p>
                
                <form className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600" 
                        defaultValue="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600" 
                        defaultValue="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Company</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600" 
                        defaultValue="Acme Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Subscription Plan</label>
                      <select className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600">
                        <option>Free Trial</option>
                        <option>Basic Plan</option>
                        <option>Premium Plan</option>
                        <option>Enterprise</option>
                      </select>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 before:bg-blue-400 before:blur-xl">
                    Save Changes
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Features Section - 4x3 Grid */}
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-blue-400 dark:to-purple-400">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            title="AI-Powered Analytics"
            description="Get insights from your data with our powerful AI analytics engine."
            icon="🧠"
          />
          <FeatureCard
            title="Custom Dashboards"
            description="Create personalized dashboards to monitor what matters most to you."
            icon="📊"
          />
          <FeatureCard
            title="Real-time Reporting"
            description="Access reports in real-time to make informed business decisions."
            icon="⚡"
          />
          <FeatureCard
            title="Team Collaboration"
            description="Work together with your team with shared workspaces and permissions."
            icon="👥"
          />
          <FeatureCard
            title="Data Integration"
            description="Connect to various data sources to centralize your information."
            icon="🔌"
          />
          <FeatureCard
            title="Automated Workflows"
            description="Set up automated processes to save time and reduce errors."
            icon="⚙️"
          />
          <FeatureCard
            title="Mobile Access"
            description="Access your dashboard from anywhere using our mobile application."
            icon="📱"
          />
          <FeatureCard
            title="Data Visualization"
            description="Transform complex data into beautiful, easy-to-understand visuals."
            icon="📈"
          />
          <FeatureCard
            title="Custom Reports"
            description="Generate tailored reports specific to your business needs."
            icon="📝"
          />
          <FeatureCard
            title="API Access"
            description="Integrate our platform with your existing tools via our robust API."
            icon="🔑"
          />
          <FeatureCard
            title="Security"
            description="Enterprise-grade security to keep your data safe and compliant."
            icon="🔒"
          />
          <FeatureCard
            title="24/7 Support"
            description="Get help whenever you need it with our round-the-clock support team."
            icon="🛟"
          />
        </div>
      </div>
    </div>
  );
} 