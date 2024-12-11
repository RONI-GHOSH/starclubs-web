import React from 'react';
import { Download, Globe, ChevronRight, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <img src="https://starclubs.in/favicon.png" alt="Star Clubs Logo" className="w-10 h-10" />
            <span className="text-white text-2xl font-bold">Star Clubs</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#download" className="text-gray-300 hover:text-white transition">Download</a>
            <a href="#support" className="text-gray-300 hover:text-white transition">Support</a>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">Betting</span> Experience
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Join millions of players worldwide. Place your bets, follow live matches, and win big with our secure and intuitive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition shadow-lg">
                <Download size={20} />
                Download App
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition border border-white/20">
                <Globe size={20} />
                Play on Web
              </button>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=600&q=80" 
                alt="App Preview" 
                className="rounded-2xl shadow-2xl border-4 border-white/10"
              />
              <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400" fill="currentColor" />
                  <span className="text-white font-bold">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <div className="bg-gradient-to-br from-pink-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Star className="text-white" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Secure Betting</h3>
            <p className="text-gray-300">Advanced security measures to protect your transactions and data.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Globe className="text-white" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Live Updates</h3>
            <p className="text-gray-300">Real-time match updates and instant betting options.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <div className="bg-gradient-to-br from-yellow-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <ChevronRight className="text-white" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Quick Payouts</h3>
            <p className="text-gray-300">Fast and reliable withdrawal system for your winnings.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;