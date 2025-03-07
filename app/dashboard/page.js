'use client';
import { useState, useContext } from 'react';
import { ThemeContext } from '../layout';
import Link from 'next/link';
import React from 'react';

// Define reusable components directly in this file to avoid import errors
// These can be moved to separate files later when the structure is set up

// Button component with glowing effect
const Button = ({ onClick, className, children, variant = 'primary', size = 'md', loading = false, disabled = false }) => {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 before:bg-blue-400',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 before:bg-purple-400',
    accent: 'bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:from-pink-600 hover:to-orange-600 before:bg-pink-400',
    success: 'bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600 before:bg-green-400',
    error: 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 before:bg-red-400',
    info: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 before:bg-blue-400'
  };
  
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`rounded-md font-medium relative
      transition-all duration-300 transform hover:scale-105
      shadow-md hover:shadow-xl
      before:absolute before:inset-0 before:rounded-md before:z-[-1]
      before:transition-opacity before:opacity-0 hover:before:opacity-100
      before:blur-xl ${variantClasses[variant]} ${sizeClasses[size]} ${className}
      ${loading ? 'opacity-70' : ''} ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      <span className="relative z-10">{!loading ? children : 'Loading...'}</span>
    </button>
  );
};

// Card component
const Card = ({ 
  title, 
  children, 
  icon, 
  className = '',
  footer,
  hoverEffect = true,
  compact = false
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 backdrop-blur-sm shadow-lg rounded-xl p-6
                    ${hoverEffect ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-1' : ''}
                    ${compact ? 'p-4' : 'p-6'}
                    border border-white border-opacity-20 ${className}`}>
      
      {(title || icon) && (
        <div className="flex items-center gap-2 mb-4">
          {icon && <div className="text-purple-600 dark:text-pink-400 text-2xl">{icon}</div>}
          {title && <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-blue-400 dark:to-purple-400">{title}</h2>}
        </div>
      )}
      
      <div className="mb-4">
        {children}
      </div>
      
      {footer && <div className="flex justify-end">{footer}</div>}
    </div>
  );
};

// Avatar component
const Avatar = ({ src, alt, size = 'md', online = false, offline = false, className = '' }) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };
  
  return (
    <div className={`relative inline-block ${className}`}>
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden ring-2 ring-purple-300 dark:ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-800`}>
        {src ? (
          <img src={src} alt={alt || 'Avatar'} className="w-full h-full object-cover" />
        ) : (
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 dark:from-blue-500 dark:to-purple-500 text-white flex items-center justify-center text-xl font-bold w-full h-full">
            {alt?.slice(0, 2) || '?'}
          </div>
        )}
      </div>
      {online && (
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></span>
      )}
      {offline && (
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-gray-400 ring-2 ring-white"></span>
      )}
    </div>
  );
};

// Avatar Group component
const AvatarGroup = ({ children, max = 3, className = '' }) => {
  const displayAvatars = React.Children.toArray(children).slice(0, max);
  const remaining = React.Children.count(children) - max;
  
  return (
    <div className={`flex -space-x-4 ${className}`}>
      {displayAvatars}
      
      {remaining > 0 && (
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white ring-2 ring-white dark:ring-gray-800">
          <span>+{remaining}</span>
        </div>
      )}
    </div>
  );
};

// Stat component
const Stat = ({ title, value, desc, icon, className = '', variant = 'default' }) => {
  const variantClasses = {
    default: 'text-purple-600 dark:text-pink-400',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    error: 'text-red-600 dark:text-red-400',
    info: 'text-blue-600 dark:text-blue-400'
  };
  
  return (
    <div className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow ${className}`}>
      <div className="flex justify-between">
        {icon && <div className="text-purple-500 dark:text-pink-400 text-3xl">{icon}</div>}
        <div className="text-right">
          <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
          <div className={`text-2xl font-bold ${variantClasses[variant]}`}>{value}</div>
          {desc && <div className="text-xs text-gray-500 dark:text-gray-400">{desc}</div>}
        </div>
      </div>
    </div>
  );
};

// User data for avatars
const users = [
  { name: 'John Doe', src: 'https://i.pravatar.cc/150?img=1', online: true },
  { name: 'Jane Smith', src: 'https://i.pravatar.cc/150?img=5', offline: true },
  { name: 'Mark Wilson', src: 'https://i.pravatar.cc/150?img=8' },
  { name: 'Anna Brown', src: 'https://i.pravatar.cc/150?img=9', online: true },
  { name: 'Robert Johnson', src: 'https://i.pravatar.cc/150?img=12' },
];

// Feature Card Component
const FeatureCard = ({ title, description, icon }) => {
  return (
    <Card
      title={title}
      icon={icon}
      footer={<Button variant="primary" size="sm">Learn More</Button>}
      className="h-full"
    >
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      <div className="mt-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Team members:</p>
        <div className="flex -space-x-2">
          {users.slice(0, 3).map((user, index) => (
            <Avatar 
              key={index}
              src={user.src} 
              alt={user.name} 
              size="sm"
              online={user.online} 
              offline={user.offline} 
            />
          ))}
          {users.length > 3 && (
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 text-xs ring-2 ring-white dark:ring-gray-800">
              +{users.length - 3}
            </div>
          )}
        </div>
      </div>
    </Card>
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
            <Button variant="secondary">Back to Home</Button>
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
                  <Stat 
                    title="Active Users" 
                    value="1,254" 
                    icon="👥"
                    variant="default" 
                  />
                  <Stat 
                    title="Revenue" 
                    value="$8,540" 
                    icon="💰"
                    variant="success" 
                    desc="+12% from last month"
                  />
                  <Stat 
                    title="Conversion Rate" 
                    value="24.3%" 
                    icon="📈"
                    variant="info" 
                    desc="1.5% increase"
                  />
                  </div>
                
                <Card className="mb-6">
                  <h3 className="text-lg font-medium mb-4">Team Members</h3>
                  <div className="flex flex-wrap gap-4">
                    {users.map((user, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <Avatar 
                          src={user.src} 
                          alt={user.name} 
                          online={user.online} 
                          offline={user.offline} 
                        />
                        <span className="mt-2 text-sm">{user.name}</span>
                  </div>
                    ))}
                  </div>
                </Card>
                
                <Card>
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
                  <Button variant="primary">
                    Create Campaign
                  </Button>
                </Card>
              </div>
            )}
            
            {activeTab === 'analytics' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
                <p className="mb-6">Detailed metrics and performance analytics.</p>
                
                <Card className="mb-6">
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
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <h3 className="text-lg font-medium mb-4">Top Performing Features</h3>
                    <div className="space-y-3">
                      {['Analytics', 'Reports', 'Dashboard', 'User Management'].map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white mr-3">
                              {idx + 1}
                            </div>
                            <span>{feature}</span>
                          </div>
                          <div className="text-purple-600 dark:text-pink-400 font-bold">
                            {90 - idx * 10}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                  
                  <Card>
                    <h3 className="text-lg font-medium mb-4">User Engagement</h3>
                    <div className="space-y-4">
                      {[
                        { title: 'Daily Active Users', value: '845', change: '+12%', up: true },
                        { title: 'Session Duration', value: '4m 32s', change: '+8%', up: true },
                        { title: 'Bounce Rate', value: '24%', change: '-3%', up: false }
                      ].map((stat, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span>{stat.title}</span>
                          <div className="text-right">
                            <div className="font-bold">{stat.value}</div>
                            <div className={`text-xs ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
                              {stat.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
                <p className="mb-6">Manage your account preferences and settings.</p>
                
                <Card>
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
                  <Button variant="primary">
                    Save Changes
                  </Button>
                </Card>
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